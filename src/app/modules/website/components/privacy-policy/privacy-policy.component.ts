import {Component, OnInit} from '@angular/core';
import {WebsiteserviceService} from '../../../../_services/websiteservice.service';

@Component({
    selector: 'app-privacy-policy',
    templateUrl: './privacy-policy.component.html',
    styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {
    policyContent: any;
    policyArabicContent: any;
    language: any;

    constructor(private webservices: WebsiteserviceService) {
        this.webservices.languageSubject.subscribe(lang => {
            this.language = lang;
            console.log('language', this.language);
        });
    }

    ngOnInit() {
        this.getPolicyContent();
    }

    getPolicyContent() {
        this.webservices.getPrivacyPolicy().subscribe((data) => {
                this.policyContent = data['data']['content'];
                this.policyArabicContent = data['data']['contentArabic'];
                console.log('terms data', this.policyContent);
            }
        );

    }
}
