import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportPageComponent } from './report-page.component';
import { ReportDateRangeQueryComponent } from './report-date-range-query.component';
import { SharedModule } from '../common/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';

const routes: Routes = [
  {
    path: '',
    component: ReportPageComponent,
  },
];

@NgModule({
  declarations: [ReportPageComponent, ReportDateRangeQueryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [ReportPageComponent, ReportDateRangeQueryComponent],
})
export class ReportModule {}
