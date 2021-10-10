import { COLLECTION_NAME } from './../common/injection-tokens';
import { AuditableModel } from './../common/dto';
import { Component, Inject, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/internal/Observable';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { CollectionViewer } from '@angular/cdk/collections';
import { Timestamp } from '@firebase/firestore-types';

@Component({
  selector: 'app-patient-table',
  template: `
    <app-table
      [columns]="displayedColumns"
      orderByField="createdAt"
      orderByDirection="desc"
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

      <ng-container matColumnDef="options">
        <th mat-header-cell *matHeaderCellDef></th>
        <td mat-cell *matCellDef="let element">
          <div class="w-full flex justify-end text-gray-500">
            <a
              mat-icon-button
              class="self-end"
              [routerLink]="['./', element.id]"
            >
              <mat-icon>launch</mat-icon>
            </a>
          </div>
        </td>
      </ng-container>
    </app-table>
  `,
})
export class PatientTableComponent {
  displayedColumns = [
    'id',
    'firstName',
    'middleName',
    'lastName',
    'address',
    'birthDate',
    'civilStatus',
    'sex',
    'options',
  ];
}

export interface Patient extends AuditableModel {
  firstName: string;

  middleName: string;

  lastName: string;

  address: string;

  birthDate: Timestamp;

  civilStatus: string;

  sex: string;
}
