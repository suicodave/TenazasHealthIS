import { RoleBasedComponent } from './../common/role-based-component';
import {
  COLLECTION_DISPLAY_NAME,
  COLLECTION_NAME,
  DIALOG_COMPONENT,
  DOMAIN_DISPLAY_NAME,
} from './../common/injection-tokens';
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
import { PATIENT } from '../common/collection-names';
import { PatientFormComponent } from './patient-form.component';

@Component({
  selector: 'app-patient-table',
  template: `
    <app-table
      [columns]="displayedColumns"
      matSort
      #matSort="matSort"
      [sort]="matSort"
      [readonly]="!isEditorRole"
    >
      <ng-container matColumnDef="avatar">
        <th mat-header-cell *matHeaderCellDef>Avatar</th>
        <td mat-cell *matCellDef="let element">
          <ngx-avatar
            [src]="element?.profileImage"
            size="32"
            [name]="getInitials(element)"
          ></ngx-avatar>
        </td>
      </ng-container>
      <ng-container matColumnDef="firstName">
        <th mat-header-cell *matHeaderCellDef mat-sort-header class="p-2">
          First Name
        </th>
        <td mat-cell *matCellDef="let element" class="p-2">
          {{ element.firstName }}
        </td>
      </ng-container>

      <ng-container matColumnDef="middleName">
        <th mat-header-cell *matHeaderCellDef mat-sort-header class="p-2">
          Middle Name
        </th>
        <td mat-cell *matCellDef="let element" class="p-2">
          {{ element.middleName }}
        </td>
      </ng-container>

      <ng-container matColumnDef="lastName">
        <th mat-header-cell *matHeaderCellDef mat-sort-header class="p-2">
          Last Name
        </th>
        <td mat-cell *matCellDef="let element" class="p-2">
          {{ element.lastName }}
        </td>
      </ng-container>

      <ng-container matColumnDef="contactNumber">
        <th mat-header-cell *matHeaderCellDef mat-sort-header class="p-2">
          Contact Number
        </th>
        <td mat-cell *matCellDef="let element" class="p-2">
          {{ element.contactNumber }}
        </td>
      </ng-container>

      <ng-container matColumnDef="address">
        <th mat-header-cell *matHeaderCellDef mat-sort-header class="p-2">
          Address
        </th>
        <td mat-cell *matCellDef="let element" class="p-2">
          {{ element.address }}
        </td>
      </ng-container>

      <ng-container matColumnDef="birthDate">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Birth Date</th>
        <td mat-cell *matCellDef="let element">
          {{ element.birthDate.toDate() | date: 'mediumDate' }}
        </td>
      </ng-container>

      <ng-container matColumnDef="civilStatus">
        <th mat-header-cell *matHeaderCellDef class="p-2">Civil Status</th>
        <td mat-cell *matCellDef="let element" class="p-2">
          {{ element.civilStatus }}
        </td>
      </ng-container>

      <ng-container matColumnDef="sex">
        <th mat-header-cell *matHeaderCellDef mat-sort-header class="p-2">
          Sex
        </th>
        <td mat-cell *matCellDef="let element" class="p-2">
          {{ element.sex }}
        </td>
      </ng-container>

      <ng-container matColumnDef="createdBy">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Created By</th>
        <td mat-cell *matCellDef="let element" class="p-2">
          {{ element.createdBy | userFullname | async }}
        </td>
      </ng-container>

      <ng-container matColumnDef="createdAt">
        <th mat-header-cell *matHeaderCellDef mat-sort-header class="p-2">
          Created At
        </th>
        <td mat-cell *matCellDef="let element" class="p-2">
          {{ element.createdAt.toDate() | date }}
        </td>
      </ng-container>

      <ng-container matColumnDef="options">
        <th mat-header-cell *matHeaderCellDef></th>
        <td mat-cell *matCellDef="let element">
          <div class="w-full flex justify-end text-gray-500">
            <a
              mat-icon-button
              class="self-end text-yellow-600"
              [routerLink]="['./', element.id]"
            >
              <mat-icon>launch</mat-icon>
            </a>
          </div>
        </td>
      </ng-container>
    </app-table>
  `,
  providers: [
    {
      provide: COLLECTION_NAME,
      useValue: PATIENT,
    },
    {
      provide: DIALOG_COMPONENT,
      useValue: PatientFormComponent,
    },
    {
      provide: DOMAIN_DISPLAY_NAME,
      useValue: 'Patient',
    },
    {
      provide: COLLECTION_DISPLAY_NAME,
      useValue: PATIENT,
    },
  ],
})
export class PatientTableComponent extends RoleBasedComponent {
  displayedColumns = [
    'avatar',
    'firstName',
    'middleName',
    'lastName',
    'address',
    'createdBy',
    'createdAt',
    'options',
  ];

  getInitials(item: Patient) {
    return `${item.firstName} ${item.lastName}`;
  }
}

export interface Patient extends AuditableModel {
  firstName: string;

  middleName: string;

  lastName: string;

  contactNumber: string;

  address: string;

  birthDate: Timestamp;

  civilStatus: string;

  sex: string;

  profileImage?: string;
}
