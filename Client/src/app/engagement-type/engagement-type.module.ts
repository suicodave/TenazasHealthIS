
import { ENGAGEMENT_TYPE } from '../common/collection-names';
import {
  COLLECTION_NAME,
  DIALOG_COMPONENT,
  DOMAIN_DISPLAY_NAME,
} from '../common/injection-tokens';
import { MaterialModule } from '../material/material.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EngagementTypeListComponent } from './engagement-type-list.component';
import { EngagementTypePageComponent } from './engagement-type-page.component';
import { EngagementTypeItemComponent } from './engagement-type-item.component';
import { EngagementTypeFormComponent } from './engagement-type-form';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SharedModule } from '../common/shared.module';

const routes: Routes = [
  {
    path: '',
    component: EngagementTypePageComponent,
  },
];

@NgModule({
  declarations: [
    EngagementTypeListComponent,
    EngagementTypePageComponent,
    EngagementTypeItemComponent,
    EngagementTypeFormComponent,
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
    EngagementTypeListComponent,
    EngagementTypePageComponent,
    EngagementTypeItemComponent,
    EngagementTypeFormComponent,
  ],
  providers: [
    {
      provide: COLLECTION_NAME,
      useValue: ENGAGEMENT_TYPE,
    },
    {
      provide: DOMAIN_DISPLAY_NAME,
      useValue: 'Engagement Type',
    },
    {
      provide: DIALOG_COMPONENT,
      useValue: EngagementTypeFormComponent,
    },
  ],
})
export class EngagementTypeModule {}
