import {Component, OnInit} from '@angular/core';
import {ContentserviceService} from '../../../../../_services/contentservice.service';

@Component({
    selector: 'app-terms-and-use',
    templateUrl: './terms-and-use.component.html',
    styleUrls: ['./terms-and-use.component.css']
})
export class TermsAndUseComponent implements OnInit {
    contentEnglish = '';
    contentArabic = '';

    data: any = {
        'mode': 'formdata',
        'formdata': [
            {
                'key': 'title',
                'value': 'Hii',
                'type': 'text'
            },
            {
                'key': 'content',
                'value': 'hello',
                'type': 'text'
            },
            {
                'key': 'titleArabic',
                'value': '',
                'type': 'text'
            },
            {
                'key': 'contentArabic',
                'value': '',
                'type': 'text'
            }
        ]
    };

    editorConfig = {
        editable: true,
        spellcheck: false,
        height: '20rem',
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
        height: '20rem',
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
        this.getTermsOfUse();
    }

    getTermsOfUse() {
        this.contentService.getTerms().subscribe(res => {
            console.log(res);
            this.contentEnglish = res['data'].content;
            this.contentArabic = res['data'].contentArabic;
            // this.data.formdata[0]
        });
    }


    updateTermsOfUse() {
        const formData = new FormData();
        formData.append('content', this.contentEnglish);
        formData.append('titleArabic', 'Terms Of Use');
        formData.append('contentArabic', this.contentArabic);
        formData.append('title', 'Terms Of Use');

        this.contentService.termsUsePost(
            formData
        ).subscribe(res => {
            console.log(res);
        });
    }

}
