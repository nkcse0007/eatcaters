import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { HomeComponent } from './components/home/home.component';
import { WebsiteComponent } from './website.component';
import {SharedModule} from '../shared/shared.module';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';
import { CareersComponent } from './components/careers/careers.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { DammamComponent } from './components/dammam/dammam.component';
import { DriverRegisterationComponent } from './components/driver-registeration/driver-registeration.component'

@NgModule({
  declarations: [HomeComponent, WebsiteComponent, ContactUsComponent, AboutUsComponent, PrivacyPolicyComponent, TermsOfUseComponent, CareersComponent, FaqsComponent, DammamComponent, DriverRegisterationComponent],
  imports: [
    CommonModule,
    WebsiteRoutingModule,SharedModule
  ]
})
export class WebsiteModule { }
