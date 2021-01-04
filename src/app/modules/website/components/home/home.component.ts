import {Component, OnInit} from '@angular/core';
import {NgwWowService} from 'ngx-wow';
import {WebsiteserviceService} from '../../../../_services/websiteservice.service';

declare var $: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    language: any;
    bannerTitle: any;
    catName: any;
    catArabicName: any;
    categoryListing: any;
    singleCategoryItem: any;

    constructor(private wowService: NgwWowService, private webServices: WebsiteserviceService) {
        this.webServices.languageSubject.subscribe(lang => {
            this.language = lang;
        });
        this.wowService.init();

    }


    slideConfig = {
        'slidesToShow': 4, 'slidesToScroll': 4, prevArrow: false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    ngOnInit() {
        this.getbannerTitle();
        this.getCategory();
    }

    getbannerTitle() {
        this.webServices.getbannerTitle().subscribe(res => {
            this.bannerTitle = res['data'];
            console.log('side list', res['data']);
        });
    }

    getCategory() {
        console.warn('one');
        this.webServices.getCategoryListing().subscribe(res => {
            this.categoryListing = res['data'];
            this.categoryListing = this.categoryListing.filter(resdata => {
                return resdata.name != 'All';

            });
            console.log('side list', res['data']);
        });
    }

    getItems(category) {
        this.catName = category.name;
        this.catArabicName = category.nameArabic;
        const formData = new FormData();
        formData.append('categoryid', category._id);
        $('.items-listing').show();
        this.webServices.getCategoryItem(formData).subscribe(res => {
            this.singleCategoryItem = res['data'];

            console.log('category item', res);
        });
    }

    hideitem() {
        $('.items-listing').hide();
    }
}
