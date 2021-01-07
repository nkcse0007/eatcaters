import {Component, OnInit} from '@angular/core';
import {ContentserviceService} from '../../../../../_services/contentservice.service';

@Component({
    selector: 'app-aboutus',
    templateUrl: './aboutus.component.html',
    styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
    content = '';
    contentArabic = '';

    editorConfig = {
        editable: true,
        spellcheck: false,
        height: '20rem',
        width: '35rem',
        minHeight: '5rem',
        placeholder: 'Type something. Test the Editor... ',
        translate: 'no',
        toolbar: [
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
        toolbar: [
            ['bold', 'italic', 'underline'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent'],
        ],
    };

    constructor(private contentService: ContentserviceService) {
    }

    ngOnInit() {
        this.getAboutUs();
    }

    getAboutUs() {
        this.contentService.aboutUsGet().subscribe(res => {
            console.log(res);
            this.content = res['data'].content;
            this.contentArabic = res['data'].contentArabic;
            // this.data.formdata[0]
        });
    }


    updateAboutUs() {
        const formData = new FormData();
        formData.append('content', this.content);
        formData.append('titleArabic', 'Terms Of Use');
        formData.append('contentArabic', this.contentArabic);
        formData.append('title', 'Terms Of Use');

        this.contentService.aboutUsPost(
            formData
        ).subscribe(res => {
            console.log(res);
        });
    }

}
