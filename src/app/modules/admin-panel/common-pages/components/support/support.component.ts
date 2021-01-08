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
    title = 'firstApp';

    lat = 22.4064172;
    long = 69.0750171;
    zoom = 7;

    markers = [
        {
            lat: 21.1594627,
            lng: 72.6822083,
            label: 'Surat'
        },
        {
            lat: 23.0204978,
            lng: 72.4396548,
            label: 'Ahmedabad'
        },
        {
            lat: 22.2736308,
            lng: 70.7512555,
            label: 'Rajkot'
        }
    ];

    constructor(private contentService: ContentserviceService) {
    }

    ngOnInit() {
        this.getSupport();
        this.setCurrentLocation();
    }


    // Get Current Location Coordinates
    private setCurrentLocation() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.long = position.coords.longitude;
                this.zoom = 15;
            });
        }
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
