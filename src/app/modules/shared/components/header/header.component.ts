import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonService} from '../../../../_services/common.service';
import {WebsiteserviceService} from '../../../../_services/websiteservice.service';

declare const arLang: any;
declare const enLang: any;
declare var google: any;
declare var SPComponentLoader: any;
declare var $: any;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    currentUrl: any;
    language: any;

    constructor(private route: ActivatedRoute, public router: Router, private webservices: WebsiteserviceService, private commonService: CommonService) {
        this.webservices.languageSubject.subscribe(lang => {
            this.language = lang;
            console.log('language', this.language);
        });
    }

    hideMenu() {
        document.body.classList.remove('mobile-responsive');
    }

    langChange(lang) {
        this.webservices.setLanguage(lang);
        this.webservices.languageSubject.next(lang);
        document.body.classList.remove('mobile-responsive');
        if (lang == 'ar') {
            document.body.classList.remove('translated-ltr');
            document.body.classList.add('translated-rtl');
        } else if (lang == 'en') {
            document.body.classList.remove('translated-rtl');
            document.body.classList.add('translated-ltr');
        }
    }

    addclass() {
        document.body.classList.toggle('mobile-responsive');
    }

    public arbicLang() {
        arLang('ar');
        // window['googleTranslateElementInit'] = () => {
        //   // tslint:disable-next-line:no-unused-expression
        //   new google.translate.TranslateElement({pageLanguage: 'ar', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
        // };

        // var google_script_url = "http://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        //     SPComponentLoader.loadScript(`http://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`, {
        //   globalExportsName: 'google',
        // })

    }

    ngOnInit() {
        this.currentUrl = this.router.url;
        console.log(this.currentUrl);
        if (this.language == 'ar') {
            document.body.classList.remove('translated-ltr');
            document.body.classList.add('translated-rtl');
        } else if (this.language == 'en') {
            document.body.classList.remove('translated-rtl');
            document.body.classList.add('translated-ltr');
        }
        // this.solution.getSolution().subscribe(res => this.data = res);
        // this.translateBtn = document.getElementById('translatebtn');
    }

}
