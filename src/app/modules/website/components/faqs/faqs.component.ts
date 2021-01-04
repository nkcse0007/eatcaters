import {Component, OnInit} from '@angular/core';
import {WebsiteserviceService} from '../../../../_services/websiteservice.service';

@Component({
    selector: 'app-faqs',
    templateUrl: './faqs.component.html',
    styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {
    generalFaq: any;
    orderFaq: any;
    technicalFaq: any;
    language: any;

    constructor(private webServices: WebsiteserviceService) {
        this.webServices.languageSubject.subscribe(lang => {
            this.language = lang;
        });
    }

    ngOnInit() {
        this.getData();
    }

    getData() {
        this.webServices.getFaq().subscribe(data => {

            this.generalFaq = data['data'].filter(res => {
                return res.type == 1;
            });
            console.log('faq data', this.generalFaq);
            this.orderFaq = data['data'].filter(res => {
                return res.type == 2;
            });
            this.technicalFaq = data['data'].filter(res => {
                return res.type == 3;
            });
            console.log('data', this.orderFaq);
        });
    }

}
