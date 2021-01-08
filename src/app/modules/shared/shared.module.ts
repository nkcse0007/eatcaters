import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {NgwWowModule} from 'ngx-wow';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {HttpClientModule} from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule, MatNativeDateModule, MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {NgxEditorModule} from 'ngx-editor';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminHeaderComponent} from './components/admin-header/admin-header.component';
import {AdminFooterComponent} from './components/admin-footer/admin-footer.component';
import {AdminSidebarComponent} from './components/admin-sidebar/admin-sidebar.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
    declarations: [HeaderComponent, FooterComponent, AdminHeaderComponent, AdminFooterComponent, AdminSidebarComponent],
    imports: [
        CommonModule, NgwWowModule, SlickCarouselModule, RouterModule,
        HttpClientModule,
        MatProgressSpinnerModule, MatSlideToggleModule,
        MatTableModule, MatPaginatorModule, MatButtonModule, MatSortModule, MatNativeDateModule,
        MatInputModule, MatSelectModule, MatRadioModule, NgxEditorModule, MatDatepickerModule,
        MatCheckboxModule, MatFormFieldModule, ReactiveFormsModule, FormsModule, MatSnackBarModule,
        AgmCoreModule
    ],
    exports: [
        HeaderComponent, FooterComponent, AdminHeaderComponent, AdminFooterComponent,
        AdminSidebarComponent, NgwWowModule, SlickCarouselModule, RouterModule,
        HttpClientModule,
        MatProgressSpinnerModule, MatSlideToggleModule,
        MatTableModule, MatPaginatorModule, MatButtonModule, MatSortModule, MatNativeDateModule,
        MatInputModule, MatSelectModule, MatRadioModule, NgxEditorModule, MatDatepickerModule,
        MatCheckboxModule, MatFormFieldModule, ReactiveFormsModule, FormsModule, MatSnackBarModule,
    ]
})
export class SharedModule {
}
