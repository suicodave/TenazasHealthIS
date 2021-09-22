import { GalleryGridComponent } from './gallery/gallery-grid.component';
import { AuthModule } from './auth/auth.module';
import { LoginPageComponent } from './auth/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['']);

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    data: {
      authGuardPipe: redirectLoggedInTo,
    },
  },
  {
    path: '',
    component: GalleryGridComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthModule],
  exports: [RouterModule, AuthModule],
})
export class AppRoutingModule {}
