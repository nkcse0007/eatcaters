import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WebsiteComponent } from './website.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';
import { CareersComponent } from './components/careers/careers.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { DammamComponent } from './components/dammam/dammam.component';
import { DriverRegisterationComponent } from './components/driver-registeration/driver-registeration.component'
const routes: Routes = [
  {path:'', component:WebsiteComponent,  children: [  
    {path:'', redirectTo: '/home', pathMatch: 'full' }, 
    {path: 'home', component:HomeComponent },
    {path: 'contact-us', component:ContactUsComponent },
    {path: 'about-us', component:AboutUsComponent },
    {path: 'privacy-policy', component:PrivacyPolicyComponent },
    {path: 'terms-of-use', component:TermsOfUseComponent },
    {path: 'careers', component:CareersComponent },
    {path: 'faqs', component:FaqsComponent },
    {path: 'dammam', component:DammamComponent },
    {path: 'driver-registration', component:DriverRegisterationComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
