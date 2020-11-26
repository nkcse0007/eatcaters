import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonPagesRoutingModule } from './common-pages-routing.module';
import { TermsAndUseComponent } from './components/terms-and-use/terms-and-use.component';
import { AdminPrivacyPolicyComponent } from './components/admin-privacy-policy/admin-privacy-policy.component';
import { CommonPagesComponent } from './common-pages.component';
import {SharedModule} from '../../shared/shared.module';
import { AdminCareersComponent } from './components/admin-careers/admin-careers.component';
import { AdminFaqComponent } from './components/admin-faq/admin-faq.component';
import { AdminAboutUsComponent } from './components/admin-about-us/admin-about-us.component';
import { AdminDammamComponent } from './components/admin-dammam/admin-dammam.component';
import { AdminJeddahComponent } from './components/admin-jeddah/admin-jeddah.component';
import { AdminRiyadhComponent } from './components/admin-riyadh/admin-riyadh.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { CategoryComponent } from './components/category/category.component';
import { ItemsComponent } from './components/items/items.component';
import { ExtraComponent } from './components/extra/extra.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { BranchstatusComponent } from './components/branchstatus/branchstatus.component';
import { RegionsComponent } from './components/regions/regions.component';
import { CarrersComponent } from './components/carrers/carrers.component';
import { BannertitleComponent } from './components/bannertitle/bannertitle.component';
import { SupportComponent } from './components/support/support.component';
import { WhychooseComponent } from './components/whychoose/whychoose.component';
import { AppimageComponent } from './components/appimage/appimage.component';
import { SettingComponent } from './components/setting/setting.component';
import { AllUsersComponent } from './components/users/components/all-users/all-users.component';

@NgModule({
  declarations: [TermsAndUseComponent, AdminPrivacyPolicyComponent, CommonPagesComponent, AdminCareersComponent, AdminFaqComponent, AdminAboutUsComponent, AdminDammamComponent, AdminJeddahComponent, AdminRiyadhComponent, DashboardComponent, UsersComponent, CategoryComponent, ItemsComponent, ExtraComponent, DriversComponent, BranchstatusComponent, RegionsComponent, CarrersComponent, BannertitleComponent, SupportComponent, WhychooseComponent, AppimageComponent, SettingComponent, AllUsersComponent],
  imports: [
    CommonModule,
    CommonPagesRoutingModule,SharedModule
  ]
})
export class CommonPagesModule { }
