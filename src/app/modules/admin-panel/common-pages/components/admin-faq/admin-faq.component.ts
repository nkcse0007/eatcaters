import {Component, OnInit} from '@angular/core';
import {ContentserviceService} from '../../../../../_services/contentservice.service';

@Component({
    selector: 'app-admin-faq',
    templateUrl: './admin-faq.component.html',
    styleUrls: ['./admin-faq.component.css']
})
export class AdminFaqComponent implements OnInit {
    language = 'en';
    data: any = [];

    constructor(private contentService: ContentserviceService) {
    }

    ngOnInit() {
        this.getFaq();
    }

    getFaq() {
        this.contentService.getFaq().subscribe(res => {
            console.log(res);
            this.data = res['data'];
            // this.contentEnglish = res['data'].content;
            // this.contentArabic = res['data'].contentArabic;
            // this.data.formdata[0]
        });
    }


    updateTermsOfUse() {
        this.contentService.termsUsePost(
            {
                // content: this.contentEnglish,
                // contentArabic: this.contentArabic
            }
        ).subscribe(res => {
            console.log(res);
        });
    }

}
