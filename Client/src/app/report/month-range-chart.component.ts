import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Engagement } from '../engagement/engagement-dto';

@Component({
  selector: 'app-month-range-chart',
  template: `
    <div class="block">
      <canvas
        baseChart
        [datasets]="data"
        [labels]="labels"
        [options]="lineChartOptions"
        [legend]="lineChartLegend"
        [chartType]="lineChartType"
        [plugins]="lineChartPlugins"
      >
      </canvas>
    </div>
  `,
})
export class MonthRangeChartComponent implements OnInit {
  @Input() data: ChartDataSets[] = [];

  @Input() labels: Label[] = [];

  @Input() fromDate!: Date;

  @Input() toDate!: Date;

  lineChartOptions: ChartOptions = {
    responsive: true,
  };

  lineChartLegend = true;
  lineChartType: ChartType = 'line';
  lineChartPlugins = [];
  constructor() {}

  ngOnInit(): void {}
}
