import {Component, OnInit, ViewChild} from '@angular/core';
import {ContentserviceService} from '../../../../../_services/contentservice.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {CommonService} from '../../../../../_services/common.service';
// import { Component, OnInit } from '@angular/core';


declare var $: any;
const ELEMENT_DATA: any[] = [];

@Component({
    selector: 'app-carrers',
    templateUrl: './carrers.component.html',
    styleUrls: ['./carrers.component.css']
})
export class CarrersComponent implements OnInit {
    language = 'en';
    data: any = [];
    modelShow = false;
    careerType: any = '1';

    categoryForm: FormGroup;

    loader = false;
    modalTitle = 'Add Career';
    currentElem: any = {
        name: '',
        nameArabic: '',
        location: ''
    };
    submetted = false;
    imagePath: any;
    uploadedImage: any = '';
    files: File[] = [];
    displayedColumns: string[] = ['name', 'location', 'action'];
    disabled = false;
    ShowFilter = false;


    dataSourceSales = new MatTableDataSource<any>(ELEMENT_DATA);
    dataSourceGrowth = new MatTableDataSource<any>(ELEMENT_DATA);
    dataSourceMarketing = new MatTableDataSource<any>(ELEMENT_DATA);
    dataSourcePeople = new MatTableDataSource<any>(ELEMENT_DATA);
    dataSourceTechnology = new MatTableDataSource<any>(ELEMENT_DATA);
    dataSourceFinance = new MatTableDataSource<any>(ELEMENT_DATA);
    selection = new SelectionModel<any>(true, []);
    @ViewChild(MatSort, {static: false}) sort: MatSort;
    @ViewChild(MatPaginator, {static: true}) paginatorSales: MatPaginator;
    @ViewChild(MatPaginator, {static: true}) paginatorGrowth: MatPaginator;
    @ViewChild(MatPaginator, {static: true}) paginatorMarketing: MatPaginator;
    @ViewChild(MatPaginator, {static: true}) paginatorPeople: MatPaginator;
    @ViewChild(MatPaginator, {static: true}) paginatorTechnology: MatPaginator;
    @ViewChild(MatPaginator, {static: true}) paginatorFinance: MatPaginator;

    // }
    constructor(private formBuilder: FormBuilder, private contentService: ContentserviceService,
                private commonSrvc: CommonService, private fb: FormBuilder) {
    }


    get f() {
        return this.categoryForm.controls;
    }


    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        if (this.careerType === '1') {
            const numSelectedGeneral = this.selection.selected.length;
            const numRowsGeneral = this.dataSourceSales.data.length;
            return numSelectedGeneral === numRowsGeneral;
        }
        if (this.careerType === '2') {
            const numSelectedOrderRelated = this.selection.selected.length;
            const numRowsOrderRelated = this.dataSourceGrowth.data.length;
            return numSelectedOrderRelated === numRowsOrderRelated;
        }
        if (this.careerType === '3') {
            const numSelectedTechnical = this.selection.selected.length;
            const numRowsTechnical = this.dataSourceMarketing.data.length;
            return numSelectedTechnical === numRowsTechnical;
        }
        if (this.careerType === '4') {
            const numSelectedTechnical = this.selection.selected.length;
            const numRowsTechnical = this.dataSourcePeople.data.length;
            return numSelectedTechnical === numRowsTechnical;
        }
        if (this.careerType === '5') {
            const numSelectedTechnical = this.selection.selected.length;
            const numRowsTechnical = this.dataSourceTechnology.data.length;
            return numSelectedTechnical === numRowsTechnical;
        }
        if (this.careerType === '6') {
            const numSelectedTechnical = this.selection.selected.length;
            const numRowsTechnical = this.dataSourceFinance.data.length;
            return numSelectedTechnical === numRowsTechnical;
        }
    }

    masterToggle() {
        if (this.careerType === '1') {
            this.isAllSelected() ?
                this.selection.clear() :
                this.dataSourceSales.data.forEach(row => this.selection.select(row));
        }
        if (this.careerType === '2') {
            this.isAllSelected() ?
                this.selection.clear() :
                this.dataSourceGrowth.data.forEach(row => this.selection.select(row));
        }
        if (this.careerType === '3') {
            this.isAllSelected() ?
                this.selection.clear() :
                this.dataSourceMarketing.data.forEach(row => this.selection.select(row));
        }
        if (this.careerType === '4') {
            this.isAllSelected() ?
                this.selection.clear() :
                this.dataSourcePeople.data.forEach(row => this.selection.select(row));
        }
        if (this.careerType === '5') {
            this.isAllSelected() ?
                this.selection.clear() :
                this.dataSourceTechnology.data.forEach(row => this.selection.select(row));
        }
        if (this.careerType === '6') {
            this.isAllSelected() ?
                this.selection.clear() :
                this.dataSourceFinance.data.forEach(row => this.selection.select(row));
        }
    }

    applyFilter(event) {
        const filterValue = event.target.value;
        if (this.careerType === '1') {
            this.dataSourceSales.filter = filterValue.trim().toLowerCase();
            if (this.dataSourceSales.paginator) {
                this.dataSourceSales.paginator.firstPage();
            }
        }
        if (this.careerType === '2') {
            this.dataSourceGrowth.filter = filterValue.trim().toLowerCase();
            if (this.dataSourceGrowth.paginator) {
                this.dataSourceGrowth.paginator.firstPage();
            }
        }
        if (this.careerType === '3') {
            this.dataSourceMarketing.filter = filterValue.trim().toLowerCase();
            if (this.dataSourceMarketing.paginator) {
                this.dataSourceMarketing.paginator.firstPage();
            }
        }
        if (this.careerType === '3') {
            this.dataSourcePeople.filter = filterValue.trim().toLowerCase();
            if (this.dataSourcePeople.paginator) {
                this.dataSourcePeople.paginator.firstPage();
            }
        }
        if (this.careerType === '3') {
            this.dataSourceTechnology.filter = filterValue.trim().toLowerCase();
            if (this.dataSourceTechnology.paginator) {
                this.dataSourceTechnology.paginator.firstPage();
            }
        }
        if (this.careerType === '3') {
            this.dataSourceFinance.filter = filterValue.trim().toLowerCase();
            if (this.dataSourceFinance.paginator) {
                this.dataSourceFinance.paginator.firstPage();
            }
        }
    }

    ngOnInit() {
        this.getCareer();
        this.dataSourceSales.paginator = this.paginatorSales;
        this.dataSourceGrowth.paginator = this.paginatorGrowth;
        this.dataSourceMarketing.paginator = this.paginatorMarketing;
        this.dataSourcePeople.paginator = this.paginatorPeople;
        this.dataSourceTechnology.paginator = this.paginatorTechnology;
        this.dataSourceFinance.paginator = this.paginatorFinance;
        this.categoryForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            nameArabic: ['', [Validators.required]],
            location: ['', [Validators.required]],
        });
    }


    getCareer() {
        this.contentService.getCareerType().subscribe(res => {
            this.data = res['data'];
            console.log(this.data);
            const salesData = [];
            const GrowthData = [];
            const MarketingData = [];
            const PeopleData = [];
            const TechnologyData = [];
            const FinanceData = [];
            for (const d of this.data) {
                if (d.type === '1') {
                    salesData.push(d);
                }
                if (d.type === '2') {
                    GrowthData.push(d);
                }
                if (d.type === '3') {
                    MarketingData.push(d);
                }
                if (d.type === '4') {
                    PeopleData.push(d);
                }
                if (d.type === '5') {
                    TechnologyData.push(d);
                }
                if (d.type === '6') {
                    FinanceData.push(d);
                }
            }
            debugger;
            this.dataSourceSales.data = salesData;
            this.dataSourceGrowth.data = GrowthData;
            this.dataSourceMarketing.data = MarketingData;
            this.dataSourcePeople.data = PeopleData;
            this.dataSourceTechnology.data = TechnologyData;
            this.dataSourceFinance.data = FinanceData;
        });
    }

    openAddCareerModel() {
        this.modelShow = true;
        this.modalTitle = 'Add Career';
        this.currentElem = {
            name: '',
            nameArabic: '',
            location: ''
        };
    }


    addCareer() {
        const formData = new FormData();
        formData.append('name', this.currentElem.name);
        formData.append('nameArabic', this.currentElem.nameArabic);
        formData.append('location', this.currentElem.location);
        formData.append('type', this.careerType);
        this.contentService.addCareerType(
            formData
        ).subscribe(res => {
            debugger;
            if (this.careerType === '1') {
                this.currentElem['_id'] = res['_id'];
                this.dataSourceSales.data.push(this.currentElem);
                this.dataSourceSales._updateChangeSubscription();
            }
            if (this.careerType === '2') {
                this.currentElem['_id'] = res['_id'];
                this.dataSourceGrowth.data.push(this.currentElem);
                this.dataSourceGrowth._updateChangeSubscription();
            }
            if (this.careerType === '3') {
                this.currentElem['_id'] = res['_id'];
                this.dataSourceMarketing.data.push(this.currentElem);
                this.dataSourceMarketing._updateChangeSubscription();
            }
            if (this.careerType === '4') {
                this.currentElem['_id'] = res['_id'];
                this.dataSourcePeople.data.push(this.currentElem);
                this.dataSourcePeople._updateChangeSubscription();
            }
            if (this.careerType === '5') {
                this.currentElem['_id'] = res['_id'];
                this.dataSourceTechnology.data.push(this.currentElem);
                this.dataSourceTechnology._updateChangeSubscription();
            }
            if (this.careerType === '6') {
                this.currentElem['_id'] = res['_id'];
                this.dataSourceFinance.data.push(this.currentElem);
                this.dataSourceFinance._updateChangeSubscription();
            }

            this.modelShow = false;
        });
    }

    updateCareer() {
        const formData = new FormData();
        formData.append('name', this.currentElem.name);
        formData.append('nameArabic', this.currentElem.nameArabic);
        formData.append('location', this.currentElem.location);
        formData.append('type', this.careerType);
        this.contentService.addCareerType(
            formData
        ).subscribe(res => {

            this.modelShow = false;
        });
    }


    patchCareer(element) {
        this.modelShow = true;
        this.modalTitle = 'Edit Career';
        this.currentElem.name = element.name;
        this.currentElem.nameArabic = element.nameArabic;
        this.currentElem.location = element.location;
    }

    viewCareer(element) {
        this.modalTitle = 'View Career';
        this.currentElem.name = element.name;
        this.currentElem.nameArabic = element.nameArabic;
        this.currentElem.location = element.location;
    }

    deleteCareer(id) {
        if (this.careerType === '1') {
            for (let i = 0; i < this.dataSourceSales.data.length; i++) {
                if (this.dataSourceSales.data[i]._id === id) {
                    this.dataSourceSales.data.splice(i, 1);
                    this.dataSourceSales._updateChangeSubscription();
                }
            }
        }
        if (this.careerType === '2') {
            for (let i = 0; i < this.dataSourceGrowth.data.length; i++) {
                if (this.dataSourceGrowth.data[i]._id === id) {
                    this.dataSourceGrowth.data.splice(i, 1);
                    this.dataSourceGrowth._updateChangeSubscription();
                }
            }
        }
        if (this.careerType === '3') {
            for (let i = 0; i < this.dataSourceMarketing.data.length; i++) {
                if (this.dataSourceMarketing.data[i]._id === id) {
                    this.dataSourceMarketing.data.splice(i, 1);
                    this.dataSourceMarketing._updateChangeSubscription();
                }
            }
        }
        if (this.careerType === '4') {
            for (let i = 0; i < this.data.dataSourcePeople.length; i++) {
                if (this.dataSourcePeople.data[i]._id === id) {
                    this.dataSourcePeople.data.splice(i, 1);
                    this.dataSourcePeople._updateChangeSubscription();
                }
            }
        }
        if (this.careerType === '5') {
            for (let i = 0; i < this.dataSourceTechnology.data.length; i++) {
                if (this.dataSourceTechnology.data[i]._id === id) {
                    this.dataSourceTechnology.data.splice(i, 1);
                    this.dataSourceTechnology._updateChangeSubscription();
                }
            }
        }
        if (this.careerType === '6') {
            for (let i = 0; i < this.dataSourceFinance.data.length; i++) {
                if (this.dataSourceFinance.data[i]._id === id) {
                    this.dataSourceFinance.data.splice(i, 1);
                    this.dataSourceFinance._updateChangeSubscription();
                }
            }
        }

        const formData = new FormData();
        formData.append('id', id);
        this.contentService.deleteCareerType(
            formData
        ).subscribe(res => {
            console.log(res);
        });
    }

}
