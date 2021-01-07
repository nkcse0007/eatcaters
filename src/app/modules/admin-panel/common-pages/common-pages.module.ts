import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommonPagesRoutingModule} from './common-pages-routing.module';
import {TermsAndUseComponent} from './components/terms-and-use/terms-and-use.component';
import {AdminPrivacyPolicyComponent} from './components/admin-privacy-policy/admin-privacy-policy.component';
import {CommonPagesComponent} from './common-pages.component';
import {SharedModule} from '../../shared/shared.module';
import {AdminCareersComponent} from './components/admin-careers/admin-careers.component';
import {AdminFaqComponent} from './components/admin-faq/admin-faq.component';
import {AdminDammamComponent} from './components/admin-dammam/admin-dammam.component';
import {AdminJeddahComponent} from './components/admin-jeddah/admin-jeddah.component';
import {AdminRiyadhComponent} from './components/admin-riyadh/admin-riyadh.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {UsersComponent} from './components/users/users.component';
import {CategoryComponent} from './components/category/category.component';
import {ItemsComponent} from './components/items/items.component';
import {ExtraComponent} from './components/extra/extra.component';
import {DriversComponent} from './components/drivers/drivers.component';
import {BranchstatusComponent} from './components/branchstatus/branchstatus.component';
import {RegionsComponent} from './components/regions/regions.component';
import {CarrersComponent} from './components/carrers/carrers.component';
import {BannertitleComponent} from './components/bannertitle/bannertitle.component';
import {SupportComponent} from './components/support/support.component';
import {WhychooseComponent} from './components/whychoose/whychoose.component';
import {AppimageComponent} from './components/appimage/appimage.component';
import {SettingComponent} from './components/setting/setting.component';
import {AllUsersComponent} from './components/users/components/all-users/all-users.component';
import {SaucesComponent} from './components/extra/sauces/sauces.component';
import {Side1Component} from './components/extra/side1/side1.component';
import {Side2Component} from './components/extra/side2/side2.component';
import {AdditionalComponent} from './components/extra/additional/additional.component';
import {AboutusComponent} from './components/aboutus/aboutus.component';
import {NgxDropzoneModule} from 'ngx-dropzone';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';

@NgModule({
    declarations: [TermsAndUseComponent, AdminPrivacyPolicyComponent, CommonPagesComponent, AdminCareersComponent,
        AdminFaqComponent, AdminDammamComponent, AdminJeddahComponent, AdminRiyadhComponent, DashboardComponent,
        UsersComponent, CategoryComponent, ItemsComponent, ExtraComponent, DriversComponent, BranchstatusComponent,
        RegionsComponent, CarrersComponent, BannertitleComponent, SupportComponent, WhychooseComponent, AppimageComponent,
        SettingComponent, AllUsersComponent, SaucesComponent, Side1Component, Side2Component, AdditionalComponent, AboutusComponent],
    imports: [
        CommonModule,
        CommonPagesRoutingModule, SharedModule, NgxDropzoneModule, NgMultiSelectDropDownModule, MatSelectModule,
        MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule
    ]
})
export class CommonPagesModule {
}
