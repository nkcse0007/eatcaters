import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermsAndUseComponent } from './components/terms-and-use/terms-and-use.component';
import { AdminPrivacyPolicyComponent } from './components/admin-privacy-policy/admin-privacy-policy.component';
import { CommonPagesComponent } from './common-pages.component';
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
import { BannertitleComponent } from './components/bannertitle/bannertitle.component';
import { SupportComponent } from './components/support/support.component';
import { WhychooseComponent } from './components/whychoose/whychoose.component';
import { AppimageComponent } from './components/appimage/appimage.component';
import { SettingComponent } from './components/setting/setting.component';
const routes: Routes = [
  {path:'',component:CommonPagesComponent,children:[
    {path:'terms-and-use',component:TermsAndUseComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'user',component:UsersComponent},
    {path:'category',component:CategoryComponent},
    {path:'items',component:ItemsComponent},
    {path:'extra',component:ExtraComponent},
    {path:'drivers',component:DriversComponent},
    {path:'setting',component:SettingComponent},
    {path:'region',component:RegionsComponent},
    {path:'banner-title',component:BannertitleComponent},
    {path:'support',component:SupportComponent},
    {path:'why-choose',component:WhychooseComponent},
    {path:'app-image',component:AppimageComponent},

    {path:'branch-status',component:BranchstatusComponent},
    {path:'admin-privacy-policy',component:AdminPrivacyPolicyComponent},
    {path:'admin-careers',component:AdminCareersComponent},
    {path:'admin-faq',component:AdminFaqComponent},
    {path:'admin-about-us',component:AdminAboutUsComponent},
    {path:'admin-dammam',component:AdminDammamComponent}, 
    {path:'admin-jeddah',component:AdminJeddahComponent},
    {path:'admin-riyadh',component:AdminRiyadhComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonPagesRoutingModule { }
