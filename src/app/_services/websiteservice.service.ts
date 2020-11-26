import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse } from '@angular/common/http';
import {environment} from '../../environments/environment'; 
import { BehaviorSubject } from 'rxjs'; 
@Injectable({
  providedIn: 'root'
})
export class WebsiteserviceService { 
  baseUrl=environment.BASE_URL;
  languageSubject = new BehaviorSubject<any>(localStorage.getItem('language') ? localStorage.getItem('language'):'en');
  constructor(private http:HttpClient) { }

  setLanguage(lang){
    localStorage.setItem('language',lang)
  }
  getLanguage(){
    localStorage.getItem('language');
  }
getTermCondition(){ 
  return this.http.get(this.baseUrl+'admin/termsuseweb');
}

getAboutUsData(){
  return this.http.get(this.baseUrl+'admin/getaboutdataweb');
}
getregion(){  
  return this.http.get(this.baseUrl + 'admin/getregions');
}
getFaq(){
  return this.http.get(this.baseUrl+'admin/getfaq');
} 
getPrivacyPolicy(){
  return this.http.get(this.baseUrl+'admin/getprivacypolicy');
}
contactPost(body){  
  return this.http.post(this.baseUrl + 'admin/contactus',body);
}
getAdminDetails(){  
  return this.http.get(this.baseUrl + 'admin/getAdminDetails');
}
driverRegistration(body){  
  return this.http.post(this.baseUrl + 'admin/driverRegister',body);
}
getCareer(){  
  return this.http.get(this.baseUrl + 'admin/getcareer');
}

getCareerType(){  
  return this.http.get(this.baseUrl + 'admin/getcareertype');
}
getWhyChoose(){  
  return this.http.get(this.baseUrl + 'admin/getwhychoosedietcater');
}
getbannerTitle(){  
  return this.http.get(this.baseUrl + 'admin/getbannertitle');
}

getCategoryListing(){  
  return this.http.get(this.baseUrl + 'user/getcategorylisting');
}
getCategoryItem(id){  
  return this.http.post(this.baseUrl + 'user/getitemsweb',id);
}
getwebSupport(){  
  return this.http.get(this.baseUrl + 'admin/getsupport');
}
}
