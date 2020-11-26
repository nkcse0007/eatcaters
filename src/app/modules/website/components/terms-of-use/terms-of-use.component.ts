import { Component, OnInit } from '@angular/core';
import {WebsiteserviceService} from '../../../../_services/websiteservice.service';
import {CommonService} from '../../../../_services/common.service';
@Component({
  selector: 'app-terms-of-use',
  templateUrl: './terms-of-use.component.html',
  styleUrls: ['./terms-of-use.component.css']
})
export class TermsOfUseComponent implements OnInit {
termsContent:any;
termsArbicContent:any;
language:any;
  constructor(private webservices:WebsiteserviceService) {
   this.webservices.languageSubject.subscribe(lang=>{
    this.language = lang;
    console.log('language',this.language)
   }) 
   }

  ngOnInit() {
  this.getTermUseContent();
  }

  getTermUseContent(){
  this.webservices.getTermCondition().subscribe((data)=> {
  this.termsContent = data['data']['content'];
  this.termsArbicContent = data['data']['contentArabic']
  console.log('terms data', this.termsContent)
 } 
 ); 
  }

}
