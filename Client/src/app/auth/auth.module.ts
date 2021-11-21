import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material.module';
import { LoginPageComponent } from './login-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ForgotPasswordPageComponent } from './forgot-password-page.component';
import { ForgotPasswordFormComponent } from './forgot-password-form.component';
import { SharedModule } from '../common/shared.module';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordPageComponent,
  },
];

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFormComponent,
    ForgotPasswordPageComponent,
    ForgotPasswordFormComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [
    LoginPageComponent,
    LoginFormComponent,
    ForgotPasswordPageComponent,
    ForgotPasswordFormComponent,
  ],
})
export class AuthModule {}
