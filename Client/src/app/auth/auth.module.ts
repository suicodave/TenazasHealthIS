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



const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,

  },
];

@NgModule({
  declarations: [LoginPageComponent, LoginFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    RouterModule.forChild(routes),
  ],
  exports: [LoginPageComponent, LoginFormComponent],
})
export class AuthModule {}
