import { SignOutDirective } from './sign-out.directive';
import { FormUpdateTriggerDirective } from './forms/form-update-trigger.directive';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteTriggerDirective } from './delete/delete-trigger.directive';
import { DeleteDialogComponent } from './delete/delete-dialog.component';
import { FormCreateTriggerDirective } from './forms/form-create-trigger.directive';
import { FormComponent } from './forms/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table.component';
import { ToolbarComponent } from './toolbar.component';
import { ProfileUploadComponent } from './profile-upload.component';
import { ProfileUploadTriggerDirective } from './profile-upload-trigger.directive';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as Cloudinary from 'cloudinary-core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DeleteTriggerDirective,
    DeleteDialogComponent,
    FormCreateTriggerDirective,
    FormComponent,
    TableComponent,
    FormUpdateTriggerDirective,
    ToolbarComponent,
    SignOutDirective,
    ProfileUploadComponent,
    ProfileUploadTriggerDirective,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    CloudinaryModule.forRoot(Cloudinary, {
      cloud_name: 'hw4adyatz',
      secure: true,
      upload_preset: 'TenazasHIS',
    }),
    HttpClientModule,
  ],
  exports: [
    DeleteTriggerDirective,
    DeleteDialogComponent,
    FormCreateTriggerDirective,
    FormComponent,
    TableComponent,
    MaterialModule,
    FormUpdateTriggerDirective,
    ToolbarComponent,
    SignOutDirective,
    ProfileUploadComponent,
    ProfileUploadTriggerDirective,
  ],
})
export class SharedModule {}
