import { Component, OnInit } from '@angular/core';
import {ContentserviceService} from '../../../../../_services/contentservice.service'; 
import {CommonService} from '../../../../../_services/common.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
dashboardData:any;
  constructor( private contentService:ContentserviceService,private commonSrvc:CommonService) { }
   
  ngOnInit() {
    this.getDashboardData();
  }
  getDashboardData(){
    this.contentService.getDashaoardData().subscribe(data=>{
this.dashboardData = data['data']; 
console.log() 
    }) 
  }
}
