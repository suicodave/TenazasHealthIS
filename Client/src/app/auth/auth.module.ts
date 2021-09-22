import { MaterialModule } from './../material/material.module';
import { LoginPageComponent } from './login-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form.component';

@NgModule({
  declarations: [LoginPageComponent, LoginFormComponent],
  imports: [CommonModule, MaterialModule],
  exports: [LoginPageComponent, LoginFormComponent],
})
export class AuthModule {}
