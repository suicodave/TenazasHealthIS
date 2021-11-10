import { MaterialModule } from './../material/material.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryGridComponent } from './gallery-grid.component';
import { GalleryGridItemComponent } from './gallery-grid-item.component';
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SharedModule } from '../common/shared.module';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: '',
    component: GalleryGridComponent,
  },
];

@NgModule({
  declarations: [GalleryGridComponent, GalleryGridItemComponent],
  imports: [
    CommonModule,
    AngularFireAuthModule,
    MaterialModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [GalleryGridComponent, GalleryGridItemComponent],
})
export class GalleryModule {}
