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
    selector: 'app-admin-faq',
    templateUrl: './admin-faq.component.html',
    styleUrls: ['./admin-faq.component.css']
})
export class AdminFaqComponent implements OnInit {
    language = 'en';
    data: any = [];

    faqType: any = '1';

    categoryForm: FormGroup;

    loader = false;
    modalTitle = 'Add FAQ';
    currentElem: any = {};
    submetted = false;
    imagePath: any;
    uploadedImage: any = '';
    files: File[] = [];
    displayedColumns: string[] = ['question', 'answer', 'action'];
    disabled = false;
    ShowFilter = false;


    dataSourceGeneral = new MatTableDataSource<any>(ELEMENT_DATA);
    dataSourceOrderRelated = new MatTableDataSource<any>(ELEMENT_DATA);
    dataSourceTechnical = new MatTableDataSource<any>(ELEMENT_DATA);
    selection = new SelectionModel<any>(true, []);
    @ViewChild(MatSort, {static: false}) sort: MatSort;
    @ViewChild(MatPaginator, {static: true}) paginatorGeneral: MatPaginator;
    @ViewChild(MatPaginator, {static: true}) paginatorOrderRelated: MatPaginator;
    @ViewChild(MatPaginator, {static: true}) paginatorTechnical: MatPaginator;

    // }
    constructor(private formBuilder: FormBuilder, private contentService: ContentserviceService,
                private commonSrvc: CommonService, private fb: FormBuilder) {
    }


    get f() {
        return this.categoryForm.controls;
    }


    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        if (this.faqType === '1') {
            const numSelectedGeneral = this.selection.selected.length;
            const numRowsGeneral = this.dataSourceGeneral.data.length;
            return numSelectedGeneral === numRowsGeneral;
        }
        if (this.faqType === '2') {
            const numSelectedOrderRelated = this.selection.selected.length;
            const numRowsOrderRelated = this.dataSourceOrderRelated.data.length;
            return numSelectedOrderRelated === numRowsOrderRelated;
        }
        if (this.faqType === '3') {
            const numSelectedTechnical = this.selection.selected.length;
            const numRowsTechnical = this.dataSourceTechnical.data.length;
            return numSelectedTechnical === numRowsTechnical;
        }
    }

    masterToggle() {
        if (this.faqType === '1') {
            this.isAllSelected() ?
                this.selection.clear() :
                this.dataSourceGeneral.data.forEach(row => this.selection.select(row));
        }
        if (this.faqType === '2') {
            this.isAllSelected() ?
                this.selection.clear() :
                this.dataSourceOrderRelated.data.forEach(row => this.selection.select(row));
        }
        if (this.faqType === '3') {
            this.isAllSelected() ?
                this.selection.clear() :
                this.dataSourceTechnical.data.forEach(row => this.selection.select(row));
        }
    }

    applyFilter(event) {
        const filterValue = event.target.value;
        if (this.faqType === '1') {
            this.dataSourceGeneral.filter = filterValue.trim().toLowerCase();
            if (this.dataSourceOrderRelated.paginator) {
                this.dataSourceTechnical.paginator.firstPage();
            }
        }
        if (this.faqType === '2') {
            this.dataSourceGeneral.filter = filterValue.trim().toLowerCase();
            if (this.dataSourceOrderRelated.paginator) {
                this.dataSourceTechnical.paginator.firstPage();
            }
        }
        if (this.faqType === '3') {
            this.dataSourceGeneral.filter = filterValue.trim().toLowerCase();
            if (this.dataSourceOrderRelated.paginator) {
                this.dataSourceTechnical.paginator.firstPage();
            }
        }
    }

    ngOnInit() {
        this.getFaq();
        this.dataSourceGeneral.paginator = this.paginatorGeneral;
        this.dataSourceOrderRelated.paginator = this.paginatorOrderRelated;
        this.dataSourceTechnical.paginator = this.paginatorTechnical;
        this.categoryForm = this.formBuilder.group({
            answer: ['', [Validators.required]],
            answerArabic: ['', [Validators.required]],
            question: ['', [Validators.required]],
            questionArabic: ['', [Validators.required]],
        });
    }


    getFaq() {
        this.contentService.getFaq().subscribe(res => {
            console.log(res);
            this.data = res['data'];
            const generalData = [];
            const orderRelatedData = [];
            const technicalData = [];
            for (const d of this.data) {
                if (d.type === '1') {
                    generalData.push(d);
                }
                if (d.type === '2') {
                    orderRelatedData.push(d);
                }
                if (d.type === '3') {
                    technicalData.push(d);
                }
            }
            this.dataSourceGeneral.data = generalData;
            this.dataSourceOrderRelated.data = orderRelatedData;
            this.dataSourceTechnical.data = technicalData;
        });
    }

    openAddFaqModel() {
        this.modalTitle = 'Add FAQ';
        this.currentElem = {};
    }


    addFAQ() {
        const formData = new FormData();
        formData.append('answer', this.currentElem.answer);
        formData.append('answerArabic', this.currentElem.answerArabic);
        formData.append('question', this.currentElem.question);
        formData.append('questionArabic', this.currentElem.questionArabic);
        formData.append('type', this.faqType);
        this.contentService.faqPost(
            formData
        ).subscribe(res => {
            console.log(res);
        });
    }

    updateFaq() {
        const formData = new FormData();
        formData.append('answer', this.currentElem.answer);
        formData.append('answerArabic', this.currentElem.answerArabic);
        formData.append('question', this.currentElem.question);
        formData.append('questionArabic', this.currentElem.questionArabic);
        formData.append('type', this.faqType);
        this.contentService.faqPost(
            formData
        ).subscribe(res => {
            console.log(res);
        });
    }


    patchFaq(element) {
        this.modalTitle = 'Edit FAQ';
        this.currentElem.answer = element.answer;
        this.currentElem.answerArabic = element.answerArabic;
        this.currentElem.question = element.question;
        this.currentElem.questionArabic = element.questionArabic;
    }

    viewFaq(element) {
        this.modalTitle = 'View FAQ';
        this.currentElem.answer = element.answer;
        this.currentElem.answerArabic = element.answerArabic;
        this.currentElem.question = element.question;
        this.currentElem.questionArabic = element.questionArabic;
    }

    deleteFaq(id) {
        if (this.faqType === '1') {
            for (let i = 0; i < this.dataSourceGeneral.data.length; i++) {
                if (this.dataSourceGeneral.data[i]._id === id) {
                    this.dataSourceGeneral.data.splice(i, 1);
                    this.dataSourceGeneral._updateChangeSubscription();
                }
            }
        }
        if (this.faqType === '2') {
            for (let i = 0; i < this.dataSourceOrderRelated.data.length; i++) {
                if (this.dataSourceOrderRelated.data[i]._id === id) {
                    this.dataSourceOrderRelated.data.splice(i, 1);
                    this.dataSourceOrderRelated._updateChangeSubscription();
                }
            }
        }
        if (this.faqType === '3') {
            for (let i = 0; i < this.dataSourceTechnical.data.length; i++) {
                if (this.dataSourceTechnical.data[i]._id === id) {
                    this.dataSourceTechnical.data.splice(i, 1);
                    this.dataSourceTechnical._updateChangeSubscription();
                }
            }
        }

        const formData = new FormData();
        formData.append('id', id);
        this.contentService.deleteFaq(
            formData
        ).subscribe(res => {
            console.log(res);
        });
    }

}
