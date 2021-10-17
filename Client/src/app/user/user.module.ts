import { MaterialModule } from './../material/material.module';
import { USER } from './../common/collection-names';
import {
  COLLECTION_NAME,
  DIALOG_COMPONENT,
  DOMAIN_DISPLAY_NAME,
} from './../common/injection-tokens';
import { UserPageComponent } from './user-page.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTableComponent } from './user-table.component';
import { COLLECTION_DISPLAY_NAME } from '../common/injection-tokens';
import { SharedModule } from '../common/shared.module';
import { UserFormComponent } from './user-form.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: UserPageComponent,
  },
];

@NgModule({
  declarations: [UserTableComponent, UserPageComponent, UserFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [UserTableComponent, UserPageComponent, UserFormComponent],
  providers: [
    {
      provide: COLLECTION_DISPLAY_NAME,
      useValue: USER,
    },
    {
      provide: COLLECTION_NAME,
      useValue: USER,
    },
    {
      provide: DOMAIN_DISPLAY_NAME,
      useValue: 'User',
    },
    {
      provide: DIALOG_COMPONENT,
      useValue: UserFormComponent,
    },
  ],
})
export class UserModule {}
