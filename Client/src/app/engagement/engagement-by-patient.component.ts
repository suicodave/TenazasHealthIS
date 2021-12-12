import { EngagementService } from './../common/engagement.service';
import { RoleBasedComponent } from './../common/role-based-component';
import { Engagement } from './engagement-dto';
import {
  AngularFirestore,
  CollectionReference,
  DocumentData,
  Query,
} from '@angular/fire/firestore';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { ENGAGEMENT } from '../common/collection-names';
import {
  COLLECTION_DISPLAY_NAME,
  COLLECTION_NAME,
  DIALOG_COMPONENT,
  DOMAIN_DISPLAY_NAME,
  UPDATE_DIALOG_COMPONENT,
} from '../common/injection-tokens';
import { EngagementFormComponent } from './engagement-form.component';
import { Patient } from '../patient/patient-table.component';
import { AuthService } from '../common/auth.service';

@Component({
  selector: 'app-engagement-by-patient',
  template: `
    <app-table
      *ngIf="parentId"
      [parentData]="parentData"
      [parentId]="parentId"
      [columns]="displayedColumns"
      [filterByParent]="filterByPatient"
      matSort
      #matSort="matSort"
      [sort]="matSort"
      [readonly]="!isEditorRole"
    >
      <ng-container matColumnDef="id">
        <th mat-header-cell *matHeaderCellDef>Id</th>
        <td mat-cell *matCellDef="let element">{{ element.id }}</td>
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

      <ng-container matColumnDef="temperature">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Temperature</th>
        <td mat-cell *matCellDef="let element">{{ element.temperature }}</td>
      </ng-container>

      <ng-container matColumnDef="engagementType">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>
          Engagement Type
        </th>
        <td mat-cell *matCellDef="let element">
          {{ element.engagementType.name }}
        </td>
      </ng-container>

      <ng-container matColumnDef="height">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Height</th>
        <td mat-cell *matCellDef="let element">{{ element.height }}</td>
      </ng-container>

      <ng-container matColumnDef="engagementDate">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>
          Engagement Date
        </th>
        <td mat-cell *matCellDef="let element">
          {{ element.engagementDate.toDate() | date: 'mediumDate' }}
        </td>
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

      <ng-container matColumnDef="options">
        <th mat-header-cell *matHeaderCellDef></th>
        <td mat-cell *matCellDef="let element">
          <div class="flex justify-end">
            <button
              *ngIf="isEditorRole"
              mat-icon-button
              [matMenuTriggerFor]="menu"
              class="text-yellow-600"
            >
              <mat-icon>more_vert</mat-icon>
            </button>
            <mat-menu #menu="matMenu">
              <button mat-menu-item appFormUpdateTrigger [data]="element">
                Edit Info
              </button>
              <button mat-menu-item appDeleteTrigger [id]="element.id!">
                Delete
              </button>
            </mat-menu>
          </div>
        </td>
      </ng-container>
    </app-table>
  `,
  styleUrls: ['./engagement-by-patient-component.scss'],
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
    {
      provide: UPDATE_DIALOG_COMPONENT,
      useValue: EngagementFormComponent,
    },
  ],
})
export class EngagementByPatientComponent
  extends RoleBasedComponent
  implements OnInit
{
  displayedColumns = [
    'id',
    'bloodPressure',
    'temperature',
    'engagementType',
    'engagementDate',
    'height',
    'weight',
    'bmi',
    'story',
    'createdAt',
    'createdBy',
    'options',
  ];

  dataSource: Engagement[] = [];

  @Input() parentId: string = 'asd';

  @Input() parentData: Patient | null = null;

  filterByPatient(
    ref: CollectionReference<DocumentData>,
    parentId: string
  ): Query<DocumentData> {
    return ref.where('patient.id', '==', parentId);
  }

  constructor(
    auth: AuthService,
    private firestore: AngularFirestore,
    @Inject(COLLECTION_NAME) private collectionName: string,
    public engagementService: EngagementService
  ) {
    super(auth);
  }

  ngOnInit(): void {}
}
