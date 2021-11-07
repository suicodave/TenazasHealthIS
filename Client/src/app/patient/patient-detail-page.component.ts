import { COLLECTION_NAME } from './../common/injection-tokens';
import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Patient } from './patient-table.component';

@Component({
  selector: 'app-patient-detail-page',
  template: `
    <div class="w-full bg-gray-200 min-h-full ">
      <div
        class="p-4 pt-8 col-span-2 flex items-center flex-col relative box-border"
      >
        <div class="block w-48 h-48 bg-gray-800 rounded-full mb-4"></div>

        <p class="mb-0 text-base text-gray-700">
          {{ data?.firstName | titlecase }} {{ data?.middleName | titlecase }}
          {{ data?.lastName | titlecase }}
        </p>
        <p class="text-xs">ID: {{ id }}</p>

        <button mat-icon-button class="absolute top-8 right-4" [matMenuTriggerFor]="menu">
          <mat-icon class="mat-18" >
            more_vert
          </mat-icon>
        </button>

        <mat-menu #menu="matMenu">
          <button mat-menu-item appFormUpdateTrigger [data]="data" >Edit Info</button>
        </mat-menu>

      </div>

      <div class="p-8 mb-8 col-span-6">
        <div class="grid grid-cols-3 gap-4">
          <app-patient-property-card key="First Name">{{
            data?.firstName
          }}</app-patient-property-card>
          <app-patient-property-card key="Middle Name"
            >{{ data?.middleName }}
          </app-patient-property-card>
          <app-patient-property-card key="Last Name">{{
            data?.lastName
          }}</app-patient-property-card>
          <app-patient-property-card key="Birth Date" icon="cake">{{
            data?.birthDate?.toDate() | date: 'longDate'
          }}</app-patient-property-card>

          <div class="col-span-2">
            <app-patient-property-card key="Address" icon="home">{{
              data?.address
            }}</app-patient-property-card>
          </div>

          <app-patient-property-card key="Civil Status">{{
            data?.civilStatus
          }}</app-patient-property-card>

          <app-patient-property-card key="Sex">{{
            data?.sex
          }}</app-patient-property-card>

          <app-patient-property-card key="Age">{{
            age
          }}</app-patient-property-card>
        </div>
      </div>
      <div class="p-8">
        <app-engagement-by-patient
          *ngIf="id"
          [parentData]="data"
          [parentId]="id"
        ></app-engagement-by-patient>
      </div>
    </div>
  `,
})
export class PatientDetailPageComponent implements OnInit {
  id: string | null = this.route.snapshot.paramMap.get('id');

  data!: Patient;

  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    @Inject(COLLECTION_NAME) private collectionName: string
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    const path = [this.collectionName, this.id].join('/');

    this.firestore
      .doc<Patient>(path)
      .valueChanges({ idField: 'id' })
      .subscribe((x) => {
        this.data = x!;
      });
  }

  get age(): number {
    const fromDate = this.data?.birthDate.toDate().getFullYear();

    const toDate = new Date(Date.now()).getFullYear();

    return toDate - fromDate;
  }
}
