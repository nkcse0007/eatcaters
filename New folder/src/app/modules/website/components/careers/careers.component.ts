import { Component, OnInit } from '@angular/core';
import {WebsiteserviceService} from '../../../../_services/websiteservice.service'; 
@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
careerType:any;
careerTypeArray = new Array();
  language:any;
  careerTitle:any;
  constructor(private webServices:WebsiteserviceService) {
    this.webServices.languageSubject.subscribe(lang=>{
      this.language = lang;
    })
   }

  ngOnInit() {
    this.getCareerType();
    this.getcareerTitle();
  }
  getcareerTitle() { 
    this.webServices.getCareer().subscribe(res => {
      this.careerTitle = res['data']
      console.log('careet title', res['data'])
    })
  }
  getCareerType(){
    this.webServices.getCareerType().subscribe(res=>{
      this.careerType = res['data']; 
      this.careerTypeArray = this.careerType.filter(careerName=>{
        return careerName.type == '1'
      })
      console.log('career type',this.careerType)
    })
  }
  careerFilter(type){
    this.careerTypeArray = this.careerType.filter(careerName=>{
      return careerName.type == type
    })
    console.log('career type filter',this.careerTypeArray)
  }
}
