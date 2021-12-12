import { EngagementService } from './../common/engagement.service';
import { Component, OnInit } from '@angular/core';
import { ENGAGEMENT } from '../common/collection-names';
import {
  COLLECTION_DISPLAY_NAME,
  COLLECTION_NAME,
  DIALOG_COMPONENT,
  DOMAIN_DISPLAY_NAME,
} from '../common/injection-tokens';
import { EngagementFormComponent } from './engagement-form.component';

@Component({
  selector: 'app-engagement-table',
  template: `
    <app-table
      [columns]="columns"
      matSort
      #matSort="matSort"
      [sort]="matSort"
      [readonly]="true"
    >
      <ng-container matColumnDef="id">
        <th mat-header-cell *matHeaderCellDef>Id</th>
        <td mat-cell *matCellDef="let element">{{ element.id }}</td>
      </ng-container>
      <ng-container matColumnDef="patient">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Patient</th>
        <td mat-cell *matCellDef="let element">
          {{
            renderFullName(
              element.patient.firstName,
              element.patient.middleName,
              element.patient.lastName
            )
          }}
        </td>
      </ng-container>

      <ng-container matColumnDef="type">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Type</th>
        <td mat-cell *matCellDef="let element">
          {{ element.engagementType.name }}
        </td>
      </ng-container>

      <ng-container matColumnDef="bloodPressure">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>
          Blood Pressure
        </th>
        <td mat-cell *matCellDef="let element">
          {{ element.systolicBloodPressure }}/{{
            element.diastolicBloodPressure
          }}
        </td>
      </ng-container>

      <ng-container matColumnDef="height">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Height</th>
        <td mat-cell *matCellDef="let element">{{ element.height }}</td>
      </ng-container>

      <ng-container matColumnDef="weight">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Weight</th>
        <td mat-cell *matCellDef="let element">
          {{ element.weight }}
        </td>
      </ng-container>

      <ng-container matColumnDef="bmi">
        <th mat-header-cell *matHeaderCellDef>BMI</th>
        <td mat-cell *matCellDef="let element">
          {{ engagementService.getBmi(element.weight, element.height) }}({{
            engagementService.getBmiRemark(element.weight, element.height)
          }})
        </td>
      </ng-container>

      <ng-container matColumnDef="temperature">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Temperature</th>
        <td mat-cell *matCellDef="let element">{{ element.temperature }}</td>
      </ng-container>

      <ng-container matColumnDef="engagementDate">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>
          Engagement Date
        </th>
        <td mat-cell *matCellDef="let element">
          {{ element.engagementDate.toDate() | date }}
        </td>
      </ng-container>

      <ng-container matColumnDef="story">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Story</th>
        <td mat-cell *matCellDef="let element">
          {{ element.story }}
        </td>
      </ng-container>

      <ng-container matColumnDef="createdAt">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Created At</th>
        <td mat-cell *matCellDef="let element">
          {{ element.createdAt.toDate() | date }}
        </td>
      </ng-container>

      <ng-container matColumnDef="createdBy">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Created By</th>
        <td mat-cell *matCellDef="let element">
          {{ element.createdBy | userFullname | async }}
        </td>
      </ng-container>
    </app-table>
  `,
  providers: [
    {
      provide: COLLECTION_NAME,
      useValue: ENGAGEMENT,
    },
    {
      provide: DIALOG_COMPONENT,
      useValue: EngagementFormComponent,
    },
    {
      provide: DOMAIN_DISPLAY_NAME,
      useValue: 'Engagement',
    },
    {
      provide: COLLECTION_DISPLAY_NAME,
      useValue: ENGAGEMENT,
    },
  ],
})
export class EngagementTableComponent implements OnInit {
  columns = [
    'id',
    'patient',
    'type',
    'bloodPressure',
    'weight',
    'height',
    'bmi',
    'engagementDate',
    'story',
    'temperature',
    'createdAt',
    'createdBy',
  ];

  constructor(public engagementService: EngagementService) {}

  ngOnInit(): void {}

  renderFullName(
    firstName: string,
    middleName: string,
    lastName: string
  ): string {
    return `${firstName} ${middleName} ${lastName}`;
  }
}
