import {Component, OnInit} from '@angular/core';
import {ContentserviceService} from '../../../../../_services/contentservice.service';

@Component({
    selector: 'app-admin-privacy-policy',
    templateUrl: './admin-privacy-policy.component.html',
    styleUrls: ['./admin-privacy-policy.component.css']
})
export class AdminPrivacyPolicyComponent implements OnInit {
    content: any = '';
    contentArabic: any = '';
    editorConfig = {
        editable: true,
        spellcheck: false,
        height: '17rem',
        minHeight: '5rem',
        // placeholder: 'Type something. Test the Editor... ',
        translate: 'no',
        'toolbar': [
            ['bold', 'italic', 'underline'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent'],
        ]
    };
    editorConfig2 = {
        editable: true,
        spellcheck: false,
        height: '17rem',
        minHeight: '5rem',
        // placeholder: 'Type something. Test the Editor... ',
        translate: 'no',
        'toolbar': [
            ['bold', 'italic', 'underline'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent'],
        ]
    };

    constructor(private contentService: ContentserviceService) {
    }

    ngOnInit() {
        this.privacyPolicyGet();
    }

    privacyPolicyGet() {
        this.contentService.privacyPolicyGet().subscribe(res => {
            console.log(res);
            this.content = res['data'].content;
            this.contentArabic = res['data'].contentArabic;
            // this.data.formdata[0]
        });
    }



    updatePrivacyPolicy() {
        const formData = new FormData();
        formData.append('content', this.content);
        formData.append('titleArabic', 'Privacy Policy');
        formData.append('contentArabic', this.contentArabic);
        formData.append('title', 'Privacy Policy');

        this.contentService.privacyPolicyPost(
            formData
        ).subscribe(res => {
            console.log(res);
        });
    }

}
