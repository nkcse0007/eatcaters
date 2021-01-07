import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {CategoryComponent} from './modules/admin-panel/common-pages/components/category/category.component';
import {ItemsComponent} from './modules/admin-panel/common-pages/components/items/items.component';
import {DashboardComponent} from './modules/admin-panel/common-pages/components/dashboard/dashboard.component';
import {RegionsComponent} from './modules/admin-panel/common-pages/components/regions/regions.component';
import {CarrersComponent} from './modules/admin-panel/common-pages/components/carrers/carrers.component';
// import { CareersTypeComponent } from './modules/admin-panel/common-pages/components/careers-type/careers-type.component';
// import { OrdersComponent } from './modules/admin-panel/common-pages/components/orders/orders.component';
// import { OffersComponent } from './modules/admin-panel/components/offers/offers.component';
import {BranchstatusComponent} from './modules/admin-panel/common-pages/components/branchstatus/branchstatus.component';
// import { NotificationsComponent } from './modules/admin-panel/components/notifications/notifications.component';
import {WhychooseComponent} from './modules/admin-panel/common-pages/components/whychoose/whychoose.component';
import {AppimageComponent} from './modules/admin-panel/common-pages/components/appimage/appimage.component';
import {BannertitleComponent} from './modules/admin-panel/common-pages/components/bannertitle/bannertitle.component';
import {SupportComponent} from './modules/admin-panel/common-pages/components/support/support.component';
import {UsersComponent} from './modules/admin-panel/common-pages/components/users/users.component';
import {SaucesComponent} from './modules/admin-panel/common-pages/components/extra/sauces/sauces.component';
import {Side1Component} from './modules/admin-panel/common-pages/components/extra/side1/side1.component';
import {Side2Component} from './modules/admin-panel/common-pages/components/extra/side2/side2.component';
import {AdditionalComponent} from './modules/admin-panel/common-pages/components/extra/additional/additional.component';
import {AboutusComponent} from './modules/admin-panel/common-pages/components/aboutus/aboutus.component';
import {TermsAndUseComponent} from './modules/admin-panel/common-pages/components/terms-and-use/terms-and-use.component';
import {AdminFaqComponent} from './modules/admin-panel/common-pages/components/admin-faq/admin-faq.component';
import {AdminPrivacyPolicyComponent} from './modules/admin-panel/common-pages/components/admin-privacy-policy/admin-privacy-policy.component';
import {DriversComponent} from './modules/admin-panel/common-pages/components/drivers/drivers.component';

const routes: Routes = [
    {path: 'admin/dashboard', component: DashboardComponent},
    {path: 'admin/categories', component: CategoryComponent},
    {path: 'admin/items', component: ItemsComponent},
    {path: 'admin/drivers', component: DriversComponent},
    {path: 'admin/region', component: RegionsComponent},
    {path: 'admin/careers', component: CarrersComponent},
    {path: 'admin/about-us', component: AboutusComponent},
    {path: 'admin/user', component: UsersComponent},
    {path: 'admin/terms-and-use', component: TermsAndUseComponent},
    // {path:'admin/offers',component:OffersComponent},
    {path: 'admin/branch-status', component: BranchstatusComponent},
    // {path:'admin/notifications',component:NotificationsComponent},
    {path: 'admin/extra/sauces', component: SaucesComponent},
    {path: 'admin/extra/side1', component: Side1Component},
    {path: 'admin/extra/side2', component: Side2Component},
    {path: 'admin/extra/additional', component: AdditionalComponent},
    {path: 'admin/admin-faq', component: AdminFaqComponent},
    {path: 'admin/why-choose-dietcater', component: WhychooseComponent},
    {path: 'admin/app-image', component: AppimageComponent},
    {path: 'admin/banner-title', component: BannertitleComponent},
    {path: 'admin/support', component: SupportComponent},
    {path: 'admin/admin-privacy-policy', component: AdminPrivacyPolicyComponent},
    {
        path: '',
        loadChildren: () => import('./modules/website/website.module').then(module => module.WebsiteModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('./modules/admin-panel/auth/auth.module').then(module => module.AuthModule)
    },
    {
        path: 'admin/dashboard',
        loadChildren: () => import('./modules/admin-panel/common-pages/common-pages.module').then(module => module.CommonPagesModule)
    },
    // {path:'admin/user',loadChildren:()=> import('./modules/admin-panel/users/users.module').then(module=>module.UsersModule)},
    // {path:'admin/settings',loadChildren:()=>import('./modules/admin-panel/settings/settings.module').then(module=>module.SettingsModule)},
    // {path:'admin/extra',loadChildren:()=>import('./modules/admin-panel/extra/extra.module').then(module=>module.ExtraModule)}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        enableTracing: false,
        scrollPositionRestoration: 'top'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
