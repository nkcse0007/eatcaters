import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ContentserviceService} from '../../../../../_services/contentservice.service';
import {CommonService} from '../../../../../_services/common.service';

declare var $: any;


@Component({
  selector: 'app-appimage',
  templateUrl: './appimage.component.html',
  styleUrls: ['./appimage.component.css']
})
export class AppimageComponent implements OnInit {

  loader: boolean = false;
  modalTitle = 'Add App Image';
  categoryForm: FormGroup;
  submetted = false;
  imagePath: any;
  uploadedImage: any = '';
  displayedColumns: string[] = ['select', 'name', 'nameArabic', 'image', 'action'];
  files: File[] = [];
  selection = new SelectionModel<any>(true, []);
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private formBuilder: FormBuilder, private contentService: ContentserviceService, private commonSrvc: CommonService) {
  }

  get f() {
    return this.categoryForm.controls;
  }


  ngOnInit() {
    // this.getAppImage();
    this.categoryForm = this.formBuilder.group({
      image: [''],
      type: ''
    });
  }

  onSubmit() {
    this.submetted = true;
    const formData = new FormData();

    this.loader = true;
    formData.append('title', '1');
    formData.append('image', this.uploadedImage);
    if (this.categoryForm.invalid) {
      return;
    }
    if (this.categoryForm.valid) {
      this.contentService.addAppImage(formData).subscribe(res => {
        this.commonSrvc.Toast.fire(res['message'], '', 'success');
        $('#addcategory').modal('hide');
        this.categoryForm.reset({});
        this.getAppImage();
        this.loader = false;
        this.submetted = false;
        return true;
      });

    }

  }

  getAppImage() {
    this.loader = true;
    this.contentService.getappImage('1').subscribe(res => {
      console.log('cat res', res['data']);
      this.loader = false;
    });
  }

  removeuploaedImage() {
    this.uploadedImage = '';
  }


//  IMAGE DRAG DROP
  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);

    const formData = new FormData();

    for (var i = 0; i < this.files.length; i++) {
      formData.append('file[]', this.files[i]);
    }

    this.imagePath = [];
    debugger;
    let files = this.files;
    console.log('uploaded image', event);
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.imagePath = e.target.result;
        };
        reader.readAsDataURL(file);
      }
      const filegroup = this.files[0];
      const fileName = filegroup.name;
      const lastDot = fileName.lastIndexOf('.');
      const ext = fileName.slice(lastDot + 1);
      const name = fileName.slice(0, lastDot);
      const newName = name.replace(name, 'customimage');
      var file = this.files[0];
      var blob = file.slice(0, file.size, 'image/png');
      const newFile = new File([blob], newName + '.' + ext, {type: 'image/png'});
      // this.uploadedImage =files.item(0),files.item(0).filename.replace(files.item(0).filename,newName +'.' + ext)  ;
      this.uploadedImage = newFile;
      console.log('uploaded imagesssss', this.uploadedImage);
    }

  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

}
