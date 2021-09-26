import { Engagement } from './engagement-dto';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, Inject, OnInit } from '@angular/core';
import { ENGAGEMENT } from '../common/collection-names';
import {
  COLLECTION_NAME,
  DIALOG_COMPONENT,
  DOMAIN_DISPLAY_NAME,
} from '../common/injection-tokens';
import { EngagementFormComponent } from './engagement-form.component';

@Component({
  selector: 'app-engagement-by-patient',
  template: `
    <mat-card class="p-0  rounded-xl">
      <mat-card class="rounded-t-xl mat-elevation-z0 ">
        <div class="flex justify-between items-center">
          <div class="text-gray-600 text-lg">Engagements</div>
          <div class="controls ">
            <button
              mat-button
              class="bg-blue-500  rounded-lg text-white"
              appFormCreateTrigger
            >
              New Engagement
            </button>
          </div>
        </div>
      </mat-card>


      <table
        mat-table
        [dataSource]="dataSource"
        class="rounded-none   mat-elevation-z0 w-full"
      >
        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef>Id</th>
          <td mat-cell *matCellDef="let element">{{ element.id }}</td>
        </ng-container>
        <ng-container matColumnDef="firstName">
          <th mat-header-cell *matHeaderCellDef>First Name</th>
          <td mat-cell *matCellDef="let element">{{ element.firstName }}</td>
        </ng-container>

        <ng-container matColumnDef="middleName">
          <th mat-header-cell *matHeaderCellDef>Middle Name</th>
          <td mat-cell *matCellDef="let element">{{ element.middleName }}</td>
        </ng-container>

        <ng-container matColumnDef="lastName">
          <th mat-header-cell *matHeaderCellDef>Last Name</th>
          <td mat-cell *matCellDef="let element">{{ element.lastName }}</td>
        </ng-container>

        <ng-container matColumnDef="address">
          <th mat-header-cell *matHeaderCellDef>Address</th>
          <td mat-cell *matCellDef="let element">{{ element.address }}</td>
        </ng-container>

        <ng-container matColumnDef="birthDate">
          <th mat-header-cell *matHeaderCellDef>Birth Date</th>
          <td mat-cell *matCellDef="let element">
            {{ element.birthDate.toDate() | date: 'shortDate' }}
          </td>
        </ng-container>

        <ng-container matColumnDef="civilStatus">
          <th mat-header-cell *matHeaderCellDef>Civil Status</th>
          <td mat-cell *matCellDef="let element">{{ element.civilStatus }}</td>
        </ng-container>

        <ng-container matColumnDef="sex">
          <th mat-header-cell *matHeaderCellDef>Sex</th>
          <td mat-cell *matCellDef="let element">{{ element.sex }}</td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
      </table>
    </mat-card>
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
      useValue: 'Engagements',
    },
  ],
})
export class EngagementByPatientComponent implements OnInit {
  displayedColumns = [
    'id',
    'bloodPressure',
    'temperature',
    'engagementType',
    'height',
    'weight',
  ];

  dataSource: Engagement[] = [];

  constructor(
    private firestore: AngularFirestore,
    @Inject(COLLECTION_NAME) private collectionName: string
  ) {}

  ngOnInit(): void {
    this.firestore
      .collection<Engagement>(this.collectionName, (ref) => {
        return ref.orderBy('createdAt', 'desc');
      })
      .valueChanges({ idField: 'id' })
      .subscribe((x) => {
        this.dataSource = x;
      });
  }
}
