import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './auth.component';
import {SharedModule} from '../../shared/shared.module';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [LoginComponent, AuthComponent, ForgotPasswordComponent, ProfileComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,SharedModule
  ]
})
export class AuthModule { }
