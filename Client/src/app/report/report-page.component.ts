import { ChartDataSets } from 'chart.js';
import { ReportQuery } from './report-date-range-query.component';
import { Component, Input, OnInit } from '@angular/core';
import { Engagement } from '../engagement/engagement-dto';
import { ReportService } from './report.service';

@Component({
  selector: 'app-report-page',
  template: `
    <div class="w-full min-h-full bg-gray-200 relative ">
      <app-toolbar></app-toolbar>
      <mat-tab-group class="my-8 mx-8">
        <mat-tab label="Monthly Range Report">
          <div class="flex justify-center mt-8">
            <app-report-date-range-query
              (data)="onDataChange($event)"
            ></app-report-date-range-query>
          </div>

          <div class="w-full grid grid-cols-4 my-8">
            <mat-card class="col-span-2 col-start-2" *ngIf="labels.length > 0">
              <app-month-range-chart
                [data]="dataSets"
                [labels]="labels"
              ></app-month-range-chart>
            </mat-card>
          </div>
        </mat-tab>
        <mat-tab label="Monthly  Report">
          <div class="w-full mt-8">
            <app-month-report></app-month-report>
          </div>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
})
export class ReportPageComponent implements OnInit {
  data: Engagement[] = [];

  dataSets: ChartDataSets[] = [];

  labels: string[] = [];

  constructor(private reportService: ReportService) {}

  ngOnInit(): void {}

  onDataChange(engagements: ReportQuery) {
    const datasets = this.reportService.getDatasets(engagements);

    const monthNames = this.reportService.getMonthlyLabels(
      engagements.fromDate,
      engagements.toDate
    );

    this.dataSets = datasets;

    this.labels = monthNames;
  }
}
