import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {AuthService} from '../../../../../_services/auth.service';
import {ContentserviceService} from '../../../../../_services/contentservice.service'; 
import {CommonService} from '../../../../../_services/common.service';
declare var $:any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profileData:any;
uploadedImage:any;
imagePath:any;
editForm:FormGroup;
  constructor(private commonSrvc:CommonService,private authService:AuthService,private formBuilder:FormBuilder,private contentService:ContentserviceService,) { }
  getProfileData(){
    this.authService.getProfile().subscribe(data=>{
      this.profileData = data['data'][0]; 
      console.log('profile data', data)
//       const datas={
//  name:this.profileData.name,
//  phoneNumber:this.profileData.phoneNumber
//  name:this.profileData.name,
//  phoneNumber:this.profileData.phoneNumber
//    }
   this.uploadedImage = this.profileData.profilePicture;
   this.editForm.patchValue(this.profileData);
    })
  }
  ngOnInit() {
     this.getProfileData();
    this.editForm = this.formBuilder.group({
      name:[''],
      image:[''],
      location:[''],
      address:[''],
      phoneNumber:['']
    });  
  }
 
                                                                
  profileSubmit(){ 
    const formData = new FormData();
    formData.append('name',this.editForm.value.name),
    formData.append('phoneNumber',this.editForm.value.phoneNumber);
    formData.append('location',this.editForm.value.location);
    formData.append('address',this.editForm.value.address);
formData.append('image',this.uploadedImage)
this.authService.updateProfile(formData).subscribe(res=>{
console.log('updata data',res)
this.commonSrvc.Toast.fire(res['message'], '', 'success');
this.getProfileData();
$('#editprofile').modal('hide');
})
  }
  
                   
  fileupload(event) { 
    let files = event.target.files;  
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
           this.imagePath=e.target.result; 
          console.log('imge',this.imagePath)
        }
        reader.readAsDataURL(file);
      }
      const filegroup =event.target.files[0];
      const fileName =filegroup.name;
      const lastDot = fileName.lastIndexOf('.'); 
const ext = fileName.slice(lastDot + 1)
const name = fileName.slice(0, lastDot) 
const newName = name.replace(name,'customimage'); 
var file = event.target.files[0];
var blob = file.slice(0, file.size, 'image/png'); 
const newFile = new File([blob], newName +'.' + ext, {type: 'image/png'});
      // this.uploadedImage =files.item(0),files.item(0).filename.replace(files.item(0).filename,newName +'.' + ext)  ;
      this.uploadedImage =newFile;
    }
  }

}
