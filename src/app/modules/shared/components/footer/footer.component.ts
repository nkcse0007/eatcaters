import {Component, OnInit} from '@angular/core';
import {WebsiteserviceService} from '../../../../_services/websiteservice.service';

declare var $: any;

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    language: any;
    regions: any;

    constructor(private webservices: WebsiteserviceService) {
        this.webservices.languageSubject.subscribe(lang => {
            this.language = lang;
            console.log('language', this.language);
        });
    }

    ngOnInit() {
        this.getregionList();
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll >= 100) {
                $('.header-part').addClass('fixed-header');
                $('.navbar-collapse').removeClass('show');
            } else {
                $('.header-part').removeClass('fixed-header');
            }
        });

    }

    getregionList() {
        this.webservices.getregion().subscribe(res => {
            this.regions = res['data'];
            console.log('item list', res['data']);
        });
    }
}
