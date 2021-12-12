import { SignOutDirective } from './sign-out.directive';
import { FormUpdateTriggerDirective } from './forms/form-update-trigger.directive';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteTriggerDirective } from './delete/delete-trigger.directive';
import { DeleteDialogComponent } from './delete/delete-dialog.component';
import { FormCreateTriggerDirective } from './forms/form-create-trigger.directive';
import { FormComponent } from './forms/form.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table.component';
import { ToolbarComponent } from './toolbar.component';
import { ProfileUploadComponent } from './profile-upload.component';
import { ProfileUploadTriggerDirective } from './profile-upload-trigger.directive';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as Cloudinary from 'cloudinary-core';
import { HttpClientModule } from '@angular/common/http';
import { AvatarModule } from 'ngx-avatar';
import { SignOutDialogComponent } from './sign-out-dialog.component';
import { UserFullNameDescriptorComponent } from './user-full-name-descriptor.component';
import { UserFullnamePipe } from './user-fullname.pipe';

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
    SignOutDialogComponent,
    UserFullNameDescriptorComponent,
    UserFullnamePipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    FormsModule,
    CloudinaryModule.forRoot(Cloudinary, {
      cloud_name: 'hw4adyatz',
      secure: true,
      upload_preset: 'TenazasHIS',
    }),
    HttpClientModule,
    AvatarModule,
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
    AvatarModule,
    FormsModule,
    SignOutDialogComponent,
    UserFullNameDescriptorComponent,
    UserFullnamePipe,
  ],
})
export class SharedModule {}
