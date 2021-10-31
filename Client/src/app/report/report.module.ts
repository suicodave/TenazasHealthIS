import { ChartsModule } from 'ng2-charts';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportPageComponent } from './report-page.component';
import { ReportDateRangeQueryComponent } from './report-date-range-query.component';
import { SharedModule } from '../common/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { MonthRangeChartComponent } from './month-range-chart.component';
import { MonthReportComponent } from './month-report.component';

const routes: Routes = [
  {
    path: '',
    component: ReportPageComponent,
  },
];

@NgModule({
  declarations: [
    ReportPageComponent,
    ReportDateRangeQueryComponent,
    MonthRangeChartComponent,
    MonthReportComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule,
  ],
  exports: [
    ReportPageComponent,
    ReportDateRangeQueryComponent,
    MonthRangeChartComponent,
    MonthReportComponent,
  ],
})
export class ReportModule {}
