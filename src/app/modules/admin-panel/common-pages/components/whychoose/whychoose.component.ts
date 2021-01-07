import {Component, OnInit} from '@angular/core';
import {ContentserviceService} from '../../../../../_services/contentservice.service';

@Component({
    selector: 'app-whychoose',
    templateUrl: './whychoose.component.html',
    styleUrls: ['./whychoose.component.css']
})
export class WhychooseComponent implements OnInit {

    location: any = '';
    locationArabic: any = '';
    payandwait: any = '';
    payandwaitArabic: any = '';
    store: any = '';
    storeArabic: any = '';
    title: any = '';
    titleArabic: any = '';

    editorConfig = {
        editable: true,
        spellcheck: false,
        height: '10rem',
        width: '35rem',
        minHeight: '5rem',
        placeholder: 'Type something. Test the Editor... ',
        translate: 'no',
        'toolbar': [
            ['bold', 'italic', 'underline'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent'],
        ],
    };
    editorConfig2 = {
        editable: true,
        spellcheck: false,
        height: '10rem',
        width: '35rem',
        minHeight: '5rem',
        placeholder: 'Type something. Test the Editor... ',
        translate: 'no',
        'toolbar': [
            ['bold', 'italic', 'underline'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent'],
        ],
    };
    editorConfig3 = {
        editable: true,
        spellcheck: false,
        height: '10rem',
        width: '35rem',
        minHeight: '5rem',
        placeholder: 'Type something. Test the Editor... ',
        translate: 'no',
        'toolbar': [
            ['bold', 'italic', 'underline'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent'],
        ],
    };
    editorConfig4 = {
        editable: true,
        spellcheck: false,
        height: '10rem',
        width: '35rem',
        minHeight: '5rem',
        placeholder: 'Type something. Test the Editor... ',
        translate: 'no',
        'toolbar': [
            ['bold', 'italic', 'underline'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent'],
        ],
    };
    editorConfig5 = {
        editable: true,
        spellcheck: false,
        height: '10rem',
        width: '35rem',
        minHeight: '5rem',
        placeholder: 'Type something. Test the Editor... ',
        translate: 'no',
        'toolbar': [
            ['bold', 'italic', 'underline'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent'],
        ],
    };
    editorConfig6 = {
        editable: true,
        spellcheck: false,
        height: '10rem',
        width: '35rem',
        minHeight: '5rem',
        placeholder: 'Type something. Test the Editor... ',
        translate: 'no',
        'toolbar': [
            ['bold', 'italic', 'underline'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent'],
        ],
    };
    editorConfig7 = {
        editable: true,
        spellcheck: false,
        height: '10rem',
        width: '35rem',
        minHeight: '5rem',
        placeholder: 'Type something. Test the Editor... ',
        translate: 'no',
        'toolbar': [
            ['bold', 'italic', 'underline'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent'],
        ],
    };
    editorConfig8 = {
        editable: true,
        spellcheck: false,
        height: '10rem',
        width: '35rem',
        minHeight: '5rem',
        placeholder: 'Type something. Test the Editor... ',
        translate: 'no',
        'toolbar': [
            ['bold', 'italic', 'underline'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent'],
        ],
    };

    constructor(private contentService: ContentserviceService) {
    }

    ngOnInit() {
        this.getWhyChoose();
    }

    getWhyChoose() {
        this.contentService.getWhyChoose().subscribe(res => {
            console.log(res);
            this.location = res['data']['location'];
            this.locationArabic = res['data']['locationArabic'];
            this.payandwait = res['data']['payandwait'];
            this.payandwaitArabic = res['data']['payandwaitArabic'];
            this.store = res['data']['store'];
            this.storeArabic = res['data']['storeArabic'];
            this.title = res['data']['title'];
            this.titleArabic = res['data']['titleArabic'];
        });
    }

    updateWhyChoose() {
        const formData = new FormData();
        formData.append('location', this.location);
        formData.append('locationArabic', this.locationArabic);
        formData.append('payandwait', this.payandwait);
        formData.append('payandwaitArabic', this.payandwaitArabic);
        formData.append('store', this.store);
        formData.append('storeArabic', this.storeArabic);
        formData.append('title', this.title);
        formData.append('titleArabic', this.titleArabic);

        this.contentService.addWhyChoose(
            formData
        ).subscribe(res => {
            console.log(res);
        });
    }

}
