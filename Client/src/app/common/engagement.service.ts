import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EngagementDetailComponent } from '../engagement/engagement-detail.component';
import { Engagement } from '../engagement/engagement-dto';

@Injectable({
  providedIn: 'root',
})
export class EngagementService {
  constructor(private dialog: MatDialog) {}

  getBmi(weight: number, height: number) {
    const metricHeight = height / 100;
    return Number.parseFloat(
      (weight / (metricHeight * metricHeight)).toFixed(2)
    );
  }

  getBmiRemark(weight: number, height: number): string {
    const bmi = this.getBmi(weight, height);

    if (bmi < 18.5) {
      return 'Underweight';
    }

    if (bmi <= 24.9) {
      return 'Normal';
    }

    if (bmi <= 29.9) {
      return 'Overweight';
    }

    if (bmi <= 34.9) {
      return 'Obesity Class 1';
    }

    if (bmi <= 39.9) {
      return 'Obesity Class 2';
    }

    return 'Obesity Class 3';
  }

  viewDetails(engagement: Engagement) {
    this.dialog.open(EngagementDetailComponent, {
      width: '768px',
      data: engagement,
    });
  }
}
