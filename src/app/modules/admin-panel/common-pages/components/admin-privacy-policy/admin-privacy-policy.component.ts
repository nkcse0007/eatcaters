import {Component, OnInit} from '@angular/core';
import {ContentserviceService} from '../../../../../_services/contentservice.service';

@Component({
    selector: 'app-admin-privacy-policy',
    templateUrl: './admin-privacy-policy.component.html',
    styleUrls: ['./admin-privacy-policy.component.css']
})
export class AdminPrivacyPolicyComponent implements OnInit {
    content: any = '';
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

    constructor(private contentService: ContentserviceService) {
    }

    ngOnInit() {
        this.privacyPolicyGet();
    }

    privacyPolicyGet() {
        this.contentService.privacyPolicyGet().subscribe(res => {
            console.log(res);
            this.content = res['data'].content;
            // this.data.formdata[0]
        });
    }


    updatePrivacyPolicy() {
        this.contentService.termsUsePost(
            {
                content: this.content,
            }
        ).subscribe(res => {
            console.log(res);
        });
    }

}
