// import { Component, OnInit } from '@angular/core';
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
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

    categoryId: any;
    loader = false;
    modalTitle = 'Add Items';
    categoryForm: FormGroup;
    submetted = false;
    imagePath: any;
    uploadedImage: any = '';
    files: File[] = [];
    displayedColumns: string[] = ['select', 'name', 'nameArabic', 'categoryName(InEnglish)', 'categoryName(InArabic)', 'calories',
        'protien', 'carb', 'fat', 'price', 'image', 'action'];


    mySauces: FormGroup;
    mySide1: FormGroup;
    mySide2: FormGroup;
    myAdditional: FormGroup;
    disabled = false;
    ShowFilter = false;
    limitSelection = false;
    cities: any = [];
    selectedSauces: any = [];
    selectedSide1: any = [];
    selectedSide2: any = [];
    selectedAdditional: any = [];
    dropdownSettings: any = {};
    additionalData: any = [];
    saucesData: any = [];
    side1Data: any = [];
    side2Data: any = [];
    categoryData: any = [];
    selectedCategory: any = {};

    dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
    selection = new SelectionModel<any>(true, []);
    @ViewChild(MatSort, {static: false}) sort: MatSort;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    // }
    constructor(private formBuilder: FormBuilder, private contentService: ContentserviceService,
                private commonSrvc: CommonService, private fb: FormBuilder) {
    }

    get f() {
        return this.categoryForm.controls;
    }

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
        this.getItems();
        this.getCategories();
        this.getSauces();
        this.getSide1();
        this.getSide2();
        this.getAdditional();
        this.dataSource.paginator = this.paginator;
        this.categoryForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            nameArabic: ['', [Validators.required]],
            categoryEnglish: ['', [Validators.required]],
            categoryArabic: ['', [Validators.required]],
            fat: ['', [Validators.required]],
            calories: ['', [Validators.required]],
            protien: ['', [Validators.required]],
            price: ['', [Validators.required]],
            carb: ['', [Validators.required]],
            image: [''],
        });

        this.selectedSauces = [];
        this.selectedSide1 = [];
        this.selectedSide2 = [];
        this.selectedAdditional = [];
        this.dropdownSettings = {
            singleSelection: false,
            idField: '_id',
            textField: 'name',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: this.ShowFilter
        };

        this.mySauces = this.fb.group({
            sauces: [this.selectedSauces]
        });
        this.mySide1 = this.fb.group({
            side1: [this.selectedSide1]
        });
        this.mySide2 = this.fb.group({
            side2: [this.selectedSide2]
        });
        this.myAdditional = this.fb.group({
            additional: [this.selectedAdditional]
        });
    }

    changeCat(event) {
        this.selectedCategory = this.categoryData[event.currentTarget.selectedIndex];
    }


    getAdditional() {
        this.loader = true;
        this.contentService.getextra({type: '4'}).subscribe(res => {
            console.log('cat res', res['data']);
            this.loader = false;
            this.additionalData = res['data'];
        });
    }


    getItems() {
        this.loader = true;
        this.contentService.getItems().subscribe(res => {
            this.dataSource.data = res['data'];
        });
    }


    getSauces() {
        this.loader = true;
        this.contentService.getextra({type: '1'}).subscribe(res => {
            console.log('cat res', res['data']);
            this.loader = false;
            this.saucesData = res['data'];
        });
    }


    getSide1() {
        this.loader = true;
        this.contentService.getextra({type: '2'}).subscribe(res => {
            console.log('cat res', res['data']);
            this.loader = false;
            this.side1Data = res['data'];
        });
    }


    getSide2() {
        this.loader = true;
        this.contentService.getextra({type: '3'}).subscribe(res => {
            console.log('cat res', res['data']);
            this.loader = false;
            this.side2Data = res['data'];
        });
    }

    onSaucesSelect(item: any) {
        this.selectedSauces.push(item._id);
    }

    onAdditionaldSelect(item: any) {
        this.selectedAdditional.push(item._id);
    }

    onSide1Select(item: any) {
        this.selectedSide1.push(item._id);
    }

    onSide2Select(item: any) {
        this.selectedSide2.push(item._id);
    }

    onSelectAll(items: any) {
        console.log('onSelectAll', items);
    }

    toogleShowFilter() {
        this.ShowFilter = !this.ShowFilter;
        this.dropdownSettings = Object.assign({}, this.dropdownSettings, {allowSearchFilter: this.ShowFilter});
    }

    handleLimitSelection() {
        if (this.limitSelection) {
            this.dropdownSettings = Object.assign({}, this.dropdownSettings, {limitSelection: 2});
        } else {
            this.dropdownSettings = Object.assign({}, this.dropdownSettings, {limitSelection: null});
        }
    }

    createItem() {
        debugger;
        this.submetted = true;
        const formData = new FormData();
        if (this.categoryId) {
            formData.append('catid', this.selectedCategory._id);
            formData.append('name', this.categoryForm.value.name);
            formData.append('fat', this.categoryForm.value.fat);
            formData.append('nameArabic', this.categoryForm.value.nameArabic);
            formData.append('carb', this.categoryForm.value.carb);
            formData.append('calories', this.categoryForm.value.calories);
            formData.append('price', this.categoryForm.value.price);
            formData.append('protien', this.categoryForm.value.protien);
            formData.append('side1', this.selectedSide1);
            formData.append('side2', this.selectedSide2);
            formData.append('sauces', this.selectedSauces);
            formData.append('additional', this.selectedAdditional);


            formData.append('image', this.uploadedImage);
            // if (this.categoryForm.invalid) {
            //     return;
            // }
            // if (this.categoryForm.valid) {
            this.loader = true;
            this.contentService.updateItem(formData).subscribe(res => {
                this.commonSrvc.Toast.fire(res['message'], '', 'success');
                $('#addcategory').modal('hide');
                this.loader = false;
                this.categoryForm.reset({});
                this.getCategories();
                this.categoryId = '';

                this.selectedSauces = [];
                this.selectedAdditional = [];
                this.selectedSide2 = [];
                this.selectedSide1 = [];
                this.selectedCategory = [];
                this.submetted = false;
                return true;
            });
            // }
        } else {
            this.loader = true;
            formData.append('catid', this.selectedCategory._id);
            formData.append('fat', this.categoryForm.value.fat);
            formData.append('nameArabic', this.categoryForm.value.nameArabic);
            formData.append('carb', this.categoryForm.value.carb);
            formData.append('calories', this.categoryForm.value.calories);
            formData.append('price', this.categoryForm.value.price);
            formData.append('protien', this.categoryForm.value.protien);
            formData.append('name', this.categoryForm.value.name);
            formData.append('image', this.uploadedImage);
            formData.append('side1', this.selectedSide1);
            formData.append('side2', this.selectedSide2);
            formData.append('sauces', this.selectedSauces);
            formData.append('additional', this.selectedAdditional);
            // if (this.categoryForm.invalid) {
            //     return;
            // }
            // if (this.categoryForm.valid) {
            this.contentService.addItem(formData).subscribe(res => {
                this.commonSrvc.Toast.fire(res['message'], '', 'success');
                $('#addcategory').modal('hide');
                this.categoryForm.reset({});
                // this.getCategories();
                this.loader = false;
                this.submetted = false;

                this.selectedSauces = [];
                this.selectedAdditional = [];
                this.selectedSide2 = [];
                this.selectedSide1 = [];
                this.selectedCategory = [];
                return true;
            });
            // }
        }

    }

    removeuploaedImage() {
        this.uploadedImage = '';
    }

    patchValue(elem) {
        debugger;
        this.categoryId = elem._id;
        console.log('edit id', this.categoryId);
        this.modalTitle = 'Edit Items';
        this.categoryForm.patchValue(elem);
        this.categoryForm.controls.name.enable();
        this.categoryForm.controls.nameArabic.enable();
        this.categoryForm.controls.price.enable();
        this.categoryForm.controls.fat.enable();
        this.categoryForm.controls.carb.enable();
        this.categoryForm.controls.calories.enable();
        this.categoryForm.controls.protien.enable();

        this.uploadedImage = elem.image;
        console.log('geted image', elem.image);
        this.imagePath = [''];

        this.selectedAdditional = elem.additional;
        this.selectedSide1 = elem.side1;
        this.selectedSide2 = elem.side2;
        this.selectedSauces = elem.sauces;
        this.selectedCategory = elem.categoryId;

    }

    viewCategory(element) {
        console.log(element, '===element');
        this.modalTitle = 'View Items';
        // this.categoryForm.patchValue(element);
        this.categoryForm.controls.name = element.name;
        this.categoryForm.controls.nameArabic = element.nameArabic;
        this.categoryForm.controls.price = element.price;
        this.categoryForm.controls.fat = element.fat;
        this.categoryForm.controls.carb = element.nameArabic;
        this.categoryForm.controls.calories = element.nameArabic;
        // this.categoryForm.controls['categoryEnglish'] = element.categoryId.name
        // this.categoryForm.controls['categoryArabic'] = element.categoryId.nameArabic
        this.categoryForm.controls.protien = element.protien;
        console.log(this.categoryForm, '=======categoryform');
        this.uploadedImage = element.image;
    }

    addCategory() {
        this.categoryId = '';
        this.modalTitle = 'Add Items';
        this.categoryForm.reset();
        this.categoryForm.controls.name.enable();
        this.categoryForm.controls.nameArabic.enable();
        this.categoryForm.controls.price.enable();
        this.categoryForm.controls.fat.enable();
        this.categoryForm.controls.carb.enable();
        this.categoryForm.controls.calories.enable();
        // this.categoryForm.controls.categoryId.enable();
        this.categoryForm.controls.protien.enable();
        this.uploadedImage = '';
    }

    getCategories() {
        this.loader = true;
        this.contentService.getCategory().subscribe(res => {
            this.categoryData = res['data'];
            console.log('cat res', res['data']);
            this.loader = false;
        });
        console.log(this.categoryData);

    }


    deleteCategory(id) {
        const formData = new FormData();
        formData.append('catid', id);
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this Item !',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                this.contentService.deleteItem(formData).subscribe(res => {
                    Swal.fire(
                        'Deleted!',
                        'Your Item has been deleted.',
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

        for (let i = 0; i < this.files.length; i++) {
            formData.append('file[]', this.files[i]);
        }

        // this.http.post('http://localhost:8001/upload.php', formData)
        //     .subscribe(res => {
        //       console.log(res);
        //       alert('Uploaded Successfully.');
        //     });


        this.imagePath = [];
        const files = this.files;
        console.log('uploaded image', event);
        if (files) {
            for (const file of files) {
                const reader = new FileReader();
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
            const file = this.files[0];
            const blob = file.slice(0, file.size, 'image/png');
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
