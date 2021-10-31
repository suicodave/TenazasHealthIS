import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { ReportService } from './report.service';
import { Engagement } from '../engagement/engagement-dto';
import { ENGAGEMENT } from '../common/collection-names';
import { ChartOptions } from 'chart.js';
import {
  Color,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip,
} from 'ng2-charts';
import 'chartjs-plugin-labels';

@Component({
  selector: 'app-month-report',
  template: `
    <div class="flex justify-center w-full mb-16">
      <div>
        <mat-form-field class="w-full ">
          <mat-label>Month</mat-label>
          <mat-select [(ngModel)]="month" placeholder="">
            <mat-option
              [value]="index"
              *ngFor="let item of months; index as index"
            >
              {{ item }}
            </mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field class="w-full">
          <mat-label>Year</mat-label>
          <input matInput type="number" [(ngModel)]="year" />
        </mat-form-field>

        <div class="flex justify-end">
          <button
            mat-raised-button
            color="primary"
            [disabled]="isLoading"
            (click)="generate()"
          >
            Generate
          </button>
        </div>
      </div>
    </div>

    <div class="w-full grid grid-cols-4">
      <div class="col-span-2 col-start-2">
        <canvas
          baseChart
          [data]="[dataSets]"
          [labels]="labels"
          chartType="pie"
          [options]="pieChartOptions"
          [legend]="true"
          [colors]="pieColors"
        >
        </canvas>
      </div>
    </div>
  `,
})
export class MonthReportComponent implements OnInit {
  month: number = 0;

  year: number = new Date(Date.now()).getFullYear();

  isLoading: boolean = false;

  data: Engagement[] = [];

  dataSets: number[] = [];

  pieColors: Color[] = [
    {
      backgroundColor: [
        'rgb(0, 116, 217)',
        'rgb(255, 65, 54)',
        'rgb(46, 204, 64)',
        'rgb(255, 133, 27)',
        'rgb(127, 219, 255)',
        'rgb(177, 13, 201)',
        'rgb(255, 220, 0)',
        'rgb(0, 31, 63)',
        'rgb(57, 204, 204)',
        'rgb(1, 255, 112)',
        'rgb(133, 20, 75)',
        'rgb(240, 18, 190)',
        'rgb(61, 153, 112)',
        'rgb(17, 17, 17)',
        'rgb(170, 170, 170)',
      ],
    },
  ];

  labels: string[] = [];

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      labels: {
        render: 'percentage',
        precision: 2,
        fontColor: '#fff',
      },
    },
  };

  get months(): string[] {
    return this.reportService.monthNames;
  }

  constructor(
    private reportService: ReportService,
    private firestore: AngularFirestore
  ) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {}

  generate() {
    const fromDate = new Date(this.year, this.month, 1);

    const toDate = new Date(this.year, this.month + 1, 0, 23, 59, 59);

    this.isLoading = true;

    this.firestore
      .collection<Engagement>(ENGAGEMENT, (ref) => {
        return ref
          .where('engagementDate', '>', fromDate)
          .where('engagementDate', '<', toDate);
      })
      .valueChanges({ idField: 'id' })
      .subscribe(
        (x) => {
          this.data = x;

          this.dataSets = this.reportService.generateEngagementTypeDataSets(x);

          this.labels = this.reportService.extractEngagementTypeNames(x);

          this.isLoading = false;
        },
        (x) => (this.isLoading = false)
      );
  }
}
