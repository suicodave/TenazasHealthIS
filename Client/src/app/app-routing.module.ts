import { AuthModule } from './auth/auth.module';
import { LoginPageComponent } from './auth/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthModule],
  exports: [RouterModule, AuthModule],
})
export class AppRoutingModule {}
