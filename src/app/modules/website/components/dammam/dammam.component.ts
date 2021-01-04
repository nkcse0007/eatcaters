import {Component, OnInit} from '@angular/core';
import {WebsiteserviceService} from '../../../../_services/websiteservice.service';

@Component({
    selector: 'app-dammam',
    templateUrl: './dammam.component.html',
    styleUrls: ['./dammam.component.css']
})
export class DammamComponent implements OnInit {
    regions: any;
    language: any;

    constructor(private webServices: WebsiteserviceService) {
        this.webServices.languageSubject.subscribe(lang => {
            this.language = lang;
        });
    }

    ngOnInit() {
        this.getregionList();
    }

    getregionList() {
        this.webServices.getregion().subscribe(res => {
            this.regions = res['data'];
            console.log('item list', res['data']);
        });
    }
}
