import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { WebsiteserviceService } from 'src/app/_services/websiteservice.service';
import { CommonService } from 'src/app/_services/common.service';

@Component({
  selector: 'app-driver-registeration',
  templateUrl: './driver-registeration.component.html',
  styleUrls: ['./driver-registeration.component.css']
})
export class DriverRegisterationComponent implements OnInit {
  driverForm:FormGroup;
  submetted=false;
  language:any;
  imagePath:any;
  uploadedImage: any
  constructor(private formBuilder:FormBuilder, private webService: WebsiteserviceService,private commonSrvc:CommonService) {
    this.webService.languageSubject.subscribe(lang=>{
      this.language = lang; 
     }) 
   }
 
  ngOnInit() {
    this.driverForm = this.formBuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.email]],
      phoneNumber:['',[Validators.pattern("^[0-9]*$"),Validators.minLength(10), Validators.maxLength(10)]],
      city:['',[Validators.required]],
      drivingLiceneceNumber:['',[Validators.required]],
      message:['',],
      address:[''],
      image:['',]
    })
  }
  get f() {return this.driverForm.controls}
  fileupload(event) {
    let files = event.target.files;
    console.log('uploaded image', event)
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.imagePath = e.target.result;
          console.log('imge', this.imagePath)
        }
        reader.readAsDataURL(file);
      }
      this.uploadedImage = files.item(0);
    }
  }
  onSubmit(){
    this.submetted = true;
    const formData = new FormData();
    formData.append('name',this.driverForm.value.name);
    formData.append('email',this.driverForm.value.email);
    formData.append('phoneNumber',this.driverForm.value.phoneNumber);
    formData.append('city',this.driverForm.value.city);
    formData.append('drivingLiceneceNumber',this.driverForm.value.drivingLiceneceNumber);
    formData.append('message',this.driverForm.value.message);
    formData.append('address',this.driverForm.value.address);
    formData.append('image',this.uploadedImage);

    if (this.driverForm.invalid) {
      return;
  }
  this.webService.driverRegistration(formData).subscribe(res=>{
    this.commonSrvc.Toast.fire(res['message'], '', 'success');
    this.driverForm.reset();
    this.submetted = false
  })

    console.log('form data', this.driverForm.value)
  }
}

