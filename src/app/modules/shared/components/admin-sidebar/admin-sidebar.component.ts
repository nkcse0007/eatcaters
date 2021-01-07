import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-admin-sidebar',
    templateUrl: './admin-sidebar.component.html',
    styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
    extra = false;

    constructor() {
    }

    ngOnInit() {
    }

    hidemenu() {
        if (this.extra) {
            this.extra = false;
        }
    }

    extraClicked() {
        this.extra = !this.extra;
    }
}
