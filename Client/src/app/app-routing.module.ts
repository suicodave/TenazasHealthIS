import { GalleryModule } from './gallery/gallery.module';
import { GalleryGridComponent } from './gallery/gallery-grid.component';
import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./gallery/gallery.module').then((m) => m.GalleryModule),
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin,
    },
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    data: {
      authGuardPipe: redirectLoggedInToItems,
    },
    canActivate: [AngularFireAuthGuard],
  },
  {
    path: 'CheckUpTypes',
    loadChildren: () =>
      import('./check-up-type/check-up-type.module').then(
        (m) => m.CheckUpTypeModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin,
    },
  },
  {
    path: 'Patients',
    loadChildren: () =>
      import('./patient/patient.module').then((m) => m.PatientModule),
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin,
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
