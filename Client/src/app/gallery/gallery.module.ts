import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryGridComponent } from './gallery-grid.component';



@NgModule({
  declarations: [
    GalleryGridComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GalleryGridComponent
  ]
})
export class GalleryModule { }
