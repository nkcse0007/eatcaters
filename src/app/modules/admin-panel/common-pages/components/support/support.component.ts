import {Component, OnInit} from '@angular/core';
import {ContentserviceService} from '../../../../../_services/contentservice.service';

@Component({
    selector: 'app-support',
    templateUrl: './support.component.html',
    styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
    address: any = '';
    email: any = '';
    phoneNumber: any = '';

    constructor(private contentService: ContentserviceService) {
    }

    ngOnInit() {
        this.getSupport();
    }

    getSupport() {
        this.contentService.getSupport().subscribe(res => {
            console.log(res);
            this.email = res['data']['email'];
            this.address = res['data']['address'];
            this.phoneNumber = res['data']['phoneNumber'];
        });
    }


    updateSupport() {
        const formData = new FormData();
        formData.append('email', this.email);
        formData.append('address', this.address);
        formData.append('phoneNumber', this.phoneNumber);

        this.contentService.addSupport(
            formData
        ).subscribe(res => {
            console.log(res);
        });
    }
}
