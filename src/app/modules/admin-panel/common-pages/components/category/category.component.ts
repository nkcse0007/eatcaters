import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContentserviceService} from '../../../../../_services/contentservice.service';
import {CommonService} from '../../../../../_services/common.service';
import Swal from 'sweetalert2';

declare var $: any;

const ELEMENT_DATA: any[] = [
    {categoryNameEng: 'Category 1', categoryNameArbic: 'Category 1', image: 'assets/images/home-food.png', action: ''},
];

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
    categoryId: any;
    loader: boolean = false;
    modalTitle = 'Add Category';
    categoryForm: FormGroup;
    submetted = false;
    imagePath: any;
    uploadedImage: any = '';
    displayedColumns: string[] = ['select', 'name', 'nameArabic', 'image', 'action'];
    files: File[] = [];
    dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
    selection = new SelectionModel<any>(true, []);
    @ViewChild(MatSort, {static: false}) sort: MatSort;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    constructor(private formBuilder: FormBuilder, private contentService: ContentserviceService, private commonSrvc: CommonService) {
    }

    get f() {
        return this.categoryForm.controls;
    }

    // fileupload(event) {
    //     this.imagePath = [];
    //     debugger;
    //     let files = event.target.files;
    //     console.log('uploaded image', event);
    //     if (files) {
    //         for (let file of files) {
    //             let reader = new FileReader();
    //             reader.onload = (e: any) => {
    //                 this.imagePath = e.target.result;
    //             };
    //             reader.readAsDataURL(file);
    //         }
    //         const filegroup = event.target.files[0];
    //         const fileName = filegroup.name;
    //         const lastDot = fileName.lastIndexOf('.');
    //         const ext = fileName.slice(lastDot + 1);
    //         const name = fileName.slice(0, lastDot);
    //         const newName = name.replace(name, 'customimage');
    //         var file = event.target.files[0];
    //         var blob = file.slice(0, file.size, 'image/png');
    //         const newFile = new File([blob], newName + '.' + ext, {type: 'image/png'});
    //         // this.uploadedImage =files.item(0),files.item(0).filename.replace(files.item(0).filename,newName +'.' + ext)  ;
    //         this.uploadedImage = newFile;
    //
    //         console.log('uploaded imagesssss', this.uploadedImage);
    //
    //     }
    // }

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
            image: [''],
        });
    }

    onSubmit() {
        this.submetted = true;
        const formData = new FormData();
        if (this.categoryId) {
            formData.append('catid', this.categoryId);
            formData.append('name', this.categoryForm.value.name);
            formData.append('nameArabic', this.categoryForm.value.nameArabic);
            formData.append('image', this.uploadedImage);
            if (this.categoryForm.invalid) {
                return;
            }
            if (this.categoryForm.valid) {
                this.loader = true;
                this.contentService.updateCategory(formData).subscribe(res => {
                    this.commonSrvc.Toast.fire(res['message'], '', 'success');
                    $('#addcategory').modal('hide');
                    this.loader = false;
                    this.categoryForm.reset({});
                    this.getCategories();
                    this.categoryId = '';
                    this.submetted = false;
                    return true;
                });
            }
        } else {
            this.loader = true;
            formData.append('name', this.categoryForm.value.name);
            formData.append('nameArabic', this.categoryForm.value.nameArabic);
            formData.append('image', this.uploadedImage);
            if (this.categoryForm.invalid) {
                return;
            }
            if (this.categoryForm.valid) {
                this.contentService.categoryPost(formData).subscribe(res => {
                    this.commonSrvc.Toast.fire(res['message'], '', 'success');
                    $('#addcategory').modal('hide');
                    this.categoryForm.reset({});
                    this.getCategories();
                    this.loader = false;
                    this.submetted = false;
                    return true;
                });
            }
        }

    }

    removeuploaedImage() {
        this.uploadedImage = '';
    }

    patchValue(elem) {
        this.categoryId = elem._id;
        console.log('edit id', this.categoryId);
        this.modalTitle = 'Edit Category';
        this.categoryForm.patchValue(elem);
        this.categoryForm.controls['name'].enable();
        this.categoryForm.controls['nameArabic'].enable();
        this.uploadedImage = elem.image;
        console.log('geted image', elem.image);
        this.imagePath = [''];
    }

    viewCategory(element) {
        this.modalTitle = 'View Category';
        this.categoryForm.patchValue(element);
        this.categoryForm.controls['name'].disable();
        this.categoryForm.controls['nameArabic'].disable();
        this.uploadedImage = element.image;
    }

    addCategory() {
        this.categoryId = '';
        this.modalTitle = 'Add Category';
        this.categoryForm.reset();
        this.categoryForm.controls['name'].enable();
        this.categoryForm.controls['nameArabic'].enable();
        this.uploadedImage = '';
    }

    getCategories() {
        this.loader = true;
        this.contentService.getCategory().subscribe(res => {
            this.dataSource.data = res['data'];
            console.log('cat res', res['data']);
            this.loader = false;
        });
    }

    deleteCategory(id) {
        const formData = new FormData();
        formData.append('catid', id);
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this category !',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                this.contentService.deleteCategory(formData).subscribe(res => {
                    Swal.fire(
                        'Deleted!',
                        'Your category has been deleted.',
                        'success'
                    );
                    console.log('deleted res', res);
                    this.getCategories();
                });

            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Your category is safe :)',
                    'error'
                );
            }
        });
    }


//  IMAGE DRAG DROP
    onSelect(event) {
        console.log(event);
        this.files.push(...event.addedFiles);

        const formData = new FormData();

        for (var i = 0; i < this.files.length; i++) {
            formData.append('file[]', this.files[i]);
        }

        // this.http.post('http://localhost:8001/upload.php', formData)
        //     .subscribe(res => {
        //       console.log(res);
        //       alert('Uploaded Successfully.');
        //     });


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
