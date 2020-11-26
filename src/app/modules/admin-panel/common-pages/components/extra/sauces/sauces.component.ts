import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContentserviceService } from '../../../../../../_services/contentservice.service';
import { CommonService } from '../../../../../../_services/common.service';
import Swal from 'sweetalert2';
declare var $: any;
const ELEMENT_DATA: any[] = [
  { categoryNameEng: 'Category 1', categoryNameArbic: 'Category 1', image: 'assets/images/home-food.png', action: '' },
];
@Component({
  selector: 'app-sauces',
  templateUrl: './sauces.component.html',
  styleUrls: ['./sauces.component.css']
})
export class SaucesComponent implements OnInit {

  categoryId: any;
  loader: boolean = false;
  modalTitle = 'Add Sauces';
  categoryForm: FormGroup;
  submetted = false;
  imagePath: any;
  uploadedImage: any = '';
  displayedColumns: string[] = ['select', 'name', 'nameArabic', 'calories', 'protien', 'carb', 'fat', 'price', 'action'];

  fileupload(event) {
    this.imagePath = [];
    let files = event.target.files;
    console.log('uploaded image', event)

    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.imagePath = e.target.result;

        }
        reader.readAsDataURL(file);
      }
      const filegroup = event.target.files[0];
      const fileName = filegroup.name;
      const lastDot = fileName.lastIndexOf('.');
      const ext = fileName.slice(lastDot + 1)
      const name = fileName.slice(0, lastDot)
      const newName = name.replace(name, 'customimage');
      var file = event.target.files[0];
      var blob = file.slice(0, file.size, 'image/png');
      const newFile = new File([blob], newName + '.' + ext, { type: 'image/png' });
      // this.uploadedImage =files.item(0),files.item(0).filename.replace(files.item(0).filename,newName +'.' + ext)  ;
      this.uploadedImage = newFile;

      console.log('uploaded imagesssss', this.uploadedImage)

    }
  }
  constructor(private formBuilder: FormBuilder, private contentService: ContentserviceService, private commonSrvc: CommonService) { }
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  selection = new SelectionModel<any>(true, []);
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {
    this.getCategories();
    this.dataSource.paginator = this.paginator;
    this.categoryForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      nameArabic: ['', [Validators.required]],
      fat: ['',],
      calories: ['',],
      protien: ['',],
      price: ['',],
      carb: ['',],
      image: ['',]
    })
  }
  onSubmit() {
    this.submetted = true;
    const formData = new FormData();

    if (this.categoryId) {
      formData.append('id', this.categoryId);
      formData.append('name', this.categoryForm.value.name);
      formData.append('nameArabic', this.categoryForm.value.nameArabic);
      formData.append('carb', this.categoryForm.value.carb);
      formData.append('fat', this.categoryForm.value.fat);
      formData.append('protien', this.categoryForm.value.protien);
      formData.append('calories', this.categoryForm.value.calories);
      formData.append('type', "1");
      formData.append('image', this.uploadedImage);
      if (this.categoryForm.invalid) {
        return;
      }
      if (this.categoryForm.valid) {
        this.loader = true;
        this.contentService.updateExtra(formData).subscribe(res => {
          this.commonSrvc.Toast.fire(res['message'], '', 'success');
          $('#addcategory').modal('hide');
          this.loader = false;
          this.categoryForm.reset({});
          this.getCategories();
          this.categoryId = '';
          this.submetted = false
          return true;
        })
      }
    } else {
      this.loader = true;
      formData.append('name', this.categoryForm.value.name);
      formData.append('nameArabic', this.categoryForm.value.nameArabic);
      formData.append('carb', this.categoryForm.value.carb);
      formData.append('fat', this.categoryForm.value.fat);
      formData.append('protien', this.categoryForm.value.protien);
      formData.append('calories', this.categoryForm.value.calories);
      formData.append('type', "1");
      formData.append('image', this.uploadedImage);
      if (this.categoryForm.invalid) {
        return;
      }
      if (this.categoryForm.valid) {
        this.contentService.addExtra(formData).subscribe(res => {
          this.commonSrvc.Toast.fire(res['message'], '', 'success');
          $('#addcategory').modal('hide');
          this.categoryForm.reset({});
          this.getCategories();
          this.loader = false;
          this.submetted = false
          return true;
        })
      }
    }

  }
  removeuploaedImage() {
    this.uploadedImage = '';
  }
  patchValue(elem) {
    this.categoryId = elem._id;
    console.log('edit id', this.categoryId);
    this.modalTitle = 'Edit Sauces';
    this.categoryForm.patchValue(elem)
    this.categoryForm.controls['name'].enable();
    this.categoryForm.controls['nameArabic'].enable();
    this.categoryForm.controls['carb'].enable();
    this.categoryForm.controls['calories'].enable();
    this.categoryForm.controls['protien'].enable();
    this.categoryForm.controls['fat'].enable();
    this.categoryForm.controls['price'].enable();

    this.uploadedImage = elem.image;
    console.log('geted image', elem.image)
    this.imagePath = [''];
  }
  viewCategory(element) {
    this.modalTitle = 'View Sauces';
    this.categoryForm.patchValue(element);
    this.categoryForm.controls['name'].disable();
    this.categoryForm.controls['nameArabic'].disable();
    this.categoryForm.controls['carb'].disable();
    this.categoryForm.controls['calories'].disable();
    this.categoryForm.controls['protien'].disable();
    this.categoryForm.controls['fat'].disable();
    this.categoryForm.controls['price'].disable();




    this.uploadedImage = element.image;
  }
  get f() { return this.categoryForm.controls }
  addCategory() {
    this.categoryId = '';
    this.modalTitle = 'Add Sauces';
    this.categoryForm.reset();
    this.categoryForm.controls['name'].enable();
    this.categoryForm.controls['nameArabic'].enable();
    this.categoryForm.controls['carb'].enable();
    this.categoryForm.controls['calories'].enable();
    this.categoryForm.controls['protien'].enable();
    this.categoryForm.controls['fat'].enable();
    this.categoryForm.controls['price'].enable();
    this.uploadedImage = '';
  }

  getCategories() {
    this.loader = true;
    this.contentService.getextra({ type: "1" }).subscribe(res => {
      this.dataSource.data = res['data'];
      console.log('cat res', res['data']);
      this.loader = false
    });

  }


  deleteCategory(id) {
    const formData = new FormData();
    console.log(id, "id")
    formData.append('id', id)
    formData.append('type', "1")
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this sauces !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.contentService.deleteExtra(formData).subscribe(res => {
          Swal.fire(
            'Deleted!',
            'Your sauces has been deleted.',
            'success'
          )
          console.log('deleted res', res)
          this.getCategories();
        })

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your sauces is safe :)',
          'error'
        )
      }
    })

  }


}
