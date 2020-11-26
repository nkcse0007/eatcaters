import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {AuthService} from '../../../../../_services/auth.service';
import {CommonService} from '../../../../../_services/common.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private authSrvc:AuthService,private commonSrvc:CommonService,private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
  }
get f(){ return this.loginForm.controls};
onSubmit(){
  if(this.loginForm.invalid){
    return false;
  }
  else{
    const formData:any = new FormData();
    formData.append('email',this.loginForm.value.email);
    formData.append('password',this.loginForm.value.password);
    // console.log(this.loginForm.value.email,"this.loginForm.value.email")
    // const data = {
    //   email:this.loginForm.value.email,
    //   password:this.loginForm.value.password
    // }
    this.authSrvc.login(formData)
      .subscribe(res => { 
        console.log(res,"---res") 
        this.commonSrvc.Toast.fire(res.message, '', 'error');
        // this.commonSrvc.Toast.fire(res.token, '', 'success');
        if (!res.status) {
          this.commonSrvc.Toast.fire(res.message, '', 'error');
          this.router.navigate(['/admin/my-profile']);
        } else {
          this.commonSrvc.Toast.fire(res.message, '', 'success'); 
          this.router.navigate(['/admin/my-profile']);
        }
      });
  }
  // console.log('data',formData)
}
}
