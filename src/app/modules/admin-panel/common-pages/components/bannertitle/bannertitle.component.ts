import {Component, OnInit} from '@angular/core';
import {ContentserviceService} from '../../../../../_services/contentservice.service';

@Component({
    selector: 'app-bannertitle',
    templateUrl: './bannertitle.component.html',
    styleUrls: ['./bannertitle.component.css']
})
export class BannertitleComponent implements OnInit {
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

    constructor(private contentService: ContentserviceService) {
    }

    ngOnInit() {
        this.getBanner();
    }

    getBanner() {
        this.contentService.getbannerTitle().subscribe(res => {
            console.log(res);
            this.title = res['data'].title;
            this.titleArabic = res['data'].titleArabic;
            // this.data.formdata[0]
        });
    }


    updateBanner() {
        const formData = new FormData();
        formData.append('title', this.title);
        formData.append('titleArabic', this.titleArabic);

        this.contentService.addBannerTitle(
            formData
        ).subscribe(res => {
            console.log(res);
        });
    }
}
