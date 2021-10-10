import { EngagementModule } from './../engagement/engagement.module';
import { PATIENT } from './../common/collection-names';
import {
  COLLECTION_DISPLAY_NAME,
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
import { PatientDetailPageComponent } from './patient-detail-page.component';
import { PatientPropertyCardComponent } from './patient-property-card.component';

const routes: Routes = [
  {
    path: '',
    component: PatientPageComponent,
  },
  {
    path: ':id',
    component: PatientDetailPageComponent,
  },
];

@NgModule({
  declarations: [
    PatientPageComponent,
    PatientTableComponent,
    PatientFormComponent,
    PatientDetailPageComponent,
    PatientPropertyCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
    EngagementModule,
  ],
  exports: [
    PatientPageComponent,
    PatientTableComponent,
    PatientFormComponent,
    PatientDetailPageComponent,
    PatientPropertyCardComponent,
  ],
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
    {
      provide: COLLECTION_DISPLAY_NAME,
      useValue: PATIENT,
    },
  ],
})
export class PatientModule {}
