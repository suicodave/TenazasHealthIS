import { CHECK_UP_TYPE } from './../common/collection-names';
import {
  COLLECTION_NAME,
  DIALOG_COMPONENT,
  DOMAIN_DISPLAY_NAME,
} from './../common/injection-tokens';
import { MaterialModule } from './../material/material.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckUpTypeListComponent } from './check-up-type-list.component';
import { CheckUpTypePageComponent } from './check-up-type-page.component';
import { CheckUpTypeItemComponent } from './check-up-type-item.component';
import { CheckUpTypeFormComponent } from './check-up-type-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SharedModule } from '../common/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CheckUpTypePageComponent,
  },
];

@NgModule({
  declarations: [
    CheckUpTypeListComponent,
    CheckUpTypePageComponent,
    CheckUpTypeItemComponent,
    CheckUpTypeFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    SharedModule,
  ],
  exports: [
    CheckUpTypeListComponent,
    CheckUpTypePageComponent,
    CheckUpTypeItemComponent,
    CheckUpTypeFormComponent,
  ],
  providers: [
    {
      provide: COLLECTION_NAME,
      useValue: CHECK_UP_TYPE,
    },
    {
      provide: DOMAIN_DISPLAY_NAME,
      useValue: 'Check-Up Type',
    },
    {
      provide: DIALOG_COMPONENT,
      useValue: CheckUpTypeFormComponent,
    },
  ],
})
export class CheckUpTypeModule {}
