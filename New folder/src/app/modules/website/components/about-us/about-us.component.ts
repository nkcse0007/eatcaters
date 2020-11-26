import { Component, OnInit } from '@angular/core';
import {WebsiteserviceService} from '../../../../_services/websiteservice.service';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
aboutData:any;
whyChooseArray:any;
aboutArbicContent:any;
language:any;
  constructor(private webServices:WebsiteserviceService) { 
    this.webServices.languageSubject.subscribe(lang=>{
      this.language = lang; 
     }) 
      // this.language = localStorage.getItem('language');
    // this.language = this.webServices.getLanguage();
    console.log('language about',this.language)
  
  }

  ngOnInit() {
    this.getData();
    this.getWhyChooseList();
    this.webServices.languageSubject.subscribe(lang=>{
      this.language = lang; 
     }) 
    // this.language = localStorage.getItem('language');
    // if(localStorage.getItem('language')=='ar'){
    //   this.language == 'ar'
    // }else{
    //   this.language =='en'
    // }
    
  }
  getWhyChooseList() { 
    this.webServices.getWhyChoose().subscribe(res => {
      this.whyChooseArray = res['data']
      console.log('side list', res['data'])
    })
  }
  getData(){
    this.webServices.getAboutUsData().subscribe(data=>{
this.aboutData = data['data']['content'] ;
this.aboutArbicContent = data['data']['contentArabic']
console.log('data', data)
    })
  }
}
