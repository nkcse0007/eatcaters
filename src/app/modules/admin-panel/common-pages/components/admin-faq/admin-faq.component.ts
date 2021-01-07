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

    addNewFaq(faqType) {
        let typenum = '1';
        if (faqType === 'general') {
            typenum = '1';
            this.data.push({
                answer: 'New English Answer',
                answerArabic: ' من خلال هاتفك الذكي.',
                question: 'New English Question',
                questionArabic: 'هل لديك موقع ويب سهل الاستخدام للجوال ؟',
                type: typenum
            });
        }
        if (faqType === 'orderRelated') {
            typenum = '2';
            this.data.push({
                answer: 'New English Answer',
                answerArabic: ' من خلال هاتفك الذكي.',
                question: 'New English Question',
                questionArabic: 'هل لديك موقع ويب سهل الاستخدام للجوال ؟',
                type: typenum
            });
        }
        if (faqType === 'technical') {
            typenum = '3';
            this.data.push({
                answer: 'New English Answer',
                answerArabic: ' من خلال هاتفك الذكي.',
                question: 'New English Question',
                questionArabic: 'هل لديك موقع ويب سهل الاستخدام للجوال ؟',
                type: typenum
            });
        }
        this.addFAQ(typenum, this.data.length - 1);
    }

    changeFaq(type, id, index) {
        // this.updateFAQ(type, index);
    }

    addFAQ(type, index) {
        console.log('dddddddddddd', this.data[index]);
        const formData = new FormData();
        formData.append('answer', this.data[index].answer);
        formData.append('answerArabic', this.data[index].answerArabic);
        formData.append('question', this.data[index].question);
        formData.append('questionArabic', this.data[index].questionArabic);
        formData.append('type', type);
        this.contentService.faqPost(
            formData
        ).subscribe(res => {
            console.log(res);
        });
    }
}
