import { PATIENT } from './../common/collection-names';
import {
  COLLECTION_NAME,
  DIALOG_COMPONENT,
  DOMAIN_DISPLAY_NAME,
} from './../common/injection-tokens';
import { MaterialModule } from './../material/material.module';
import { PatientPageComponent } from './patient-page.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientTableComponent } from './patient-table.component';
import { PatientFormComponent } from './patient-form.component';
import { SharedModule } from '../common/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: PatientPageComponent,
  },
];

@NgModule({
  declarations: [
    PatientPageComponent,
    PatientTableComponent,
    PatientFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [PatientPageComponent, PatientTableComponent, PatientFormComponent],
  providers: [
    {
      provide: COLLECTION_NAME,
      useValue: PATIENT,
    },
    {
      provide: DIALOG_COMPONENT,
      useValue: PatientFormComponent,
    },
    {
      provide: DOMAIN_DISPLAY_NAME,
      useValue: 'Patient',
    },
  ],
})
export class PatientModule {}
