import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './auth.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ProfileComponent } from './components/profile/profile.component';
const routes: Routes = [
  {path:'', component:AuthComponent, children:[  
    {path:'', redirectTo: '/admin/login', pathMatch: 'full' }, 
    {path:'login', component:LoginComponent},
    {path:'forgot-password', component:ForgotPasswordComponent},
    {path:'my-profile', component:ProfileComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
