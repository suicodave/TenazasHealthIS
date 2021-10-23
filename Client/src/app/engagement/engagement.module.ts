import { EngagementPageComponent } from './engagement-page.component';
import { RouterModule, Routes } from '@angular/router';
import { EngagementTypeModule } from './../engagement-type/engagement-type.module';
import { ENGAGEMENT } from './../common/collection-names';
import {
  COLLECTION_DISPLAY_NAME,
  COLLECTION_NAME,
  DIALOG_COMPONENT,
  DOMAIN_DISPLAY_NAME,
} from './../common/injection-tokens';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EngagementByPatientComponent } from './engagement-by-patient.component';
import { SharedModule } from '../common/shared.module';
import { EngagementFormComponent } from './engagement-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EngagementTableComponent } from './engagement-table.component';



@NgModule({
  declarations: [
    EngagementByPatientComponent,
    EngagementFormComponent,
    EngagementTableComponent,
    EngagementPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,

  ],
  exports: [
    EngagementByPatientComponent,
    EngagementFormComponent,
    EngagementTableComponent,
    EngagementPageComponent,
  ],
})
export class EngagementModule {}
