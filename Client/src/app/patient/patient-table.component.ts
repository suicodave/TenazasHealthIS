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
    <mat-card class="p-0  rounded-xl">
      <mat-card class="rounded-t-xl mat-elevation-z0 ">
        <div class="flex justify-between items-center">
          <div class="text-gray-600 text-lg">Patients</div>
          <div class="controls ">
            <button
              mat-button
              class="bg-blue-500  rounded-lg text-white"
              appFormCreateTrigger
            >
              Add Patient
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

        <ng-container matColumnDef="options">
          <th mat-header-cell *matHeaderCellDef></th>
          <td mat-cell *matCellDef="let element">
            <div class="w-full flex justify-end text-gray-500">
              <button mat-icon-button class="self-end">
                <mat-icon>launch</mat-icon>
              </button>
            </div>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
      </table>
      <mat-paginator
        class="rounded-b-xl"
        [length]="100"
        [pageSize]="10"
        [pageSizeOptions]="[1, 5, 10, 25, 100]"
        aria-label="Select page"
      >
      </mat-paginator>
    </mat-card>
  `,
})
export class PatientTableComponent implements OnInit {
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

  dataSource: any[] = [];

  constructor(
    private firestore: AngularFirestore,
    @Inject(COLLECTION_NAME) private collectionName: string
  ) {}

  ngOnInit(): void {
    this.firestore
      .collection(this.collectionName, (ref) => {
        return ref.orderBy('createdAt');
      })
      .valueChanges({ idField: 'id' })
      .subscribe((x) => {
        this.dataSource = x;
      });
  }
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
