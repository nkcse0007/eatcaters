import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './modules/shared/shared.module';
import {WebsiteModule} from './modules/website/website.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor} from './_helper/jwt.interceptor';
import {HttpErrorInterceptor} from './_helper/error.interceptor';
import {AuthModule} from './modules/admin-panel/auth/auth.module';
import {CommonPagesModule} from './modules/admin-panel/common-pages/common-pages.module';
import {NgxDropzoneModule} from 'ngx-dropzone';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        SharedModule,
        WebsiteModule,
        BrowserModule,
        CommonModule,
        AuthModule,
        BrowserAnimationsModule,
        NgxDropzoneModule,
        CommonPagesModule,
        NgMultiSelectDropDownModule.forRoot()
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        //    {provide: LocationStrategy, useClass: HashLocationStrategy}//incate # in url
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
