import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { WebsiteserviceService } from 'src/app/_services/websiteservice.service';
import { CommonService } from 'src/app/_services/common.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm:FormGroup;
  submetted=false;
  adminDetails:any;
  language:any;
  latitude: number = 51.673858;
  longitude: number = 7.815982;
  constructor(private formBuilder:FormBuilder, private webService: WebsiteserviceService,private commonSrvc:CommonService) {
    this.webService.languageSubject.subscribe(lang=>{
      this.language = lang; 
     }) 
   }
 
  ngOnInit() {
    this.getAdminDetails();
    this.contactForm = this.formBuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.email,Validators.required]],
      phone:['',[Validators.pattern("^[0-9]*$"),Validators.minLength(10), Validators.maxLength(10)]],
      type:['',[Validators.required]],
      subject:['',[Validators.required]],
      message:['',[Validators.required]]
    })
  }
  get f() {return this.contactForm.controls}
  onSubmit(){
    this.submetted = true;
    const formData = new FormData();
    formData.append('name',this.contactForm.value.name);
    formData.append('email',this.contactForm.value.email);
    formData.append('phone',this.contactForm.value.phone);
    formData.append('type',this.contactForm.value.type);
    formData.append('subject',this.contactForm.value.subject);
    formData.append('message',this.contactForm.value.message);

    if (this.contactForm.invalid) {
      return;
  }
  this.webService.contactPost(formData).subscribe(res=>{
    this.commonSrvc.Toast.fire(res['message'], '', 'success');
    this.contactForm.reset();
    this.submetted = false
  })

    console.log('form data', this.contactForm.value)
  }


  getAdminDetails(){
    this.webService.getwebSupport().subscribe(res=>{
this.adminDetails = res['data'];
console.log('conact fd',this.adminDetails);
this.latitude = this.adminDetails.location.coordinates[0];
this.longitude = this.adminDetails.location.coordinates[1];
    })
  }
}
