import { ChartDataSets } from 'chart.js';
import { ReportQuery } from './report-date-range-query.component';
import { Injectable } from '@angular/core';
import { Engagement } from '../engagement/engagement-dto';
import * as collection from 'collect.js';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor() {}

  get monthNames(): string[] {
    return [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
  }

  getDatasets(query: ReportQuery): ChartDataSets[] {
    const dataSets: ChartDataSets[] = [];

    const engagementTypes = this.extractEngagementTypeNames(query.data);

    const affectedMonths = this.getAffectedMonths(query.fromDate, query.toDate);

    engagementTypes.forEach((engagementType) => {
      const dataSet: ChartDataSets = {
        data: [],
        label: engagementType,
        fill: false,
      };

      affectedMonths.forEach((month) => {
        const monthlyCount = query.data.filter(
          (x) =>
            x.engagementType.name == engagementType &&
            x.engagementDate.toDate().getMonth() == month
        ).length;

        dataSet.data?.push(monthlyCount);
      });

      dataSets.push(dataSet);
    });

    return dataSets;
  }

  extractEngagementTypeNames(engagements: Engagement[]): string[] {
    return Object.keys(
      collection
        .collect(engagements)
        .groupBy((item) => item.engagementType.name)
        .all()
    );
  }

  getAffectedMonths(fromDate: Date, toDate: Date): number[] {
    const fromMonth = fromDate.getMonth();
    const toMonth = toDate.getMonth();

    const months = [];

    for (let index = fromMonth; index <= toMonth; index++) {
      months.push(index);
    }
    return months;
  }

  getMonthlyLabels(fromDate: Date, toDate: Date): string[] {
    const months = this.getAffectedMonths(fromDate, toDate);

    return months.map((x) => this.monthNames[x]);
  }

  generateEngagementTypeDataSets(engagements: Engagement[]): number[] {
    const names: string[] = this.extractEngagementTypeNames(engagements);

    const dataSets: number[] = [];

    names.forEach((name: string) => {
      const counts = engagements.filter(
        (y) => y.engagementType.name == name
      ).length;

      dataSets.push(counts);
    });

    return dataSets;
  }
}
