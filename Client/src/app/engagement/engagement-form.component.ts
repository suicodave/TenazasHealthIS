import { ENGAGEMENT_TYPE } from './../common/collection-names';
import { EngagementTypeItem } from './../engagement-type/engagement-type-item.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Patient } from '../patient/patient-table.component';
import { Engagement } from './engagement-dto';

@Component({
  selector: 'app-engagement-form',
  template: `
    <app-form [form]="form" [formGroup]="form" [id]="id">
      <div class="grid grid-cols-3 gap-4">
        <mat-form-field appearance="outline" class="w-full">
          <mat-label>Height (centimeters)</mat-label>
          <input matInput type="number" required formControlName="height" />
        </mat-form-field>

        <mat-form-field appearance="outline" class="w-full">
          <mat-label>Weight (kilograms)</mat-label>
          <input matInput type="number" required formControlName="weight" />
        </mat-form-field>

        <mat-form-field appearance="outline" class="w-full">
          <mat-label>Temperature (celsius)</mat-label>
          <input
            matInput
            type="number"
            required
            formControlName="temperature"
          />
        </mat-form-field>

        <mat-form-field appearance="outline" class="w-full">
          <mat-label>Systolic Blood Pressure</mat-label>
          <input
            matInput
            type="number"
            required
            formControlName="systolicBloodPressure"
          />
        </mat-form-field>

        <mat-form-field appearance="outline" class="w-full">
          <mat-label>Diastolic Pressure</mat-label>
          <input
            matInput
            type="number"
            required
            formControlName="diastolicBloodPressure"
          />
        </mat-form-field>

        <mat-form-field appearance="outline" class="w-full">
          <mat-label>Engagement Date</mat-label>
          <input
            matInput
            [matDatepicker]="picker"
            formControlName="engagementDate"
          />
          <mat-datepicker-toggle
            matSuffix
            [for]="picker"
          ></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>

        <mat-form-field appearance="outline" class="w-full col-span-3">
          <mat-label>Story</mat-label>
          <textarea required formControlName="story" matInput></textarea>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Engagement Type</mat-label>
          <mat-select formControlName="engagementType" [compareWith]="compare">
            <mat-option *ngFor="let item of engagementTypes" [value]="item">
              {{ item.name }}
            </mat-option>
          </mat-select>
        </mat-form-field>
      </div>

    </app-form>
  `,
})
export class EngagementFormComponent implements OnInit, OnDestroy {
  form!: FormGroup;

  id: string | undefined = undefined;

  engagementTypes: EngagementTypeItem[] = [];

  subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore,

    @Inject(MAT_DIALOG_DATA) private dialogData: Patient | Engagement
  ) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.getEngagementTypes();

    this.initForm();
  }

  initForm() {
    if (this.isForUpdate) {
      this.initForUpdate();

      return;
    }

    this.initForCreation();
  }

  initForCreation() {
    this.form = this.formBuilder.group({
      height: [0, Validators.required],
      weight: [0, Validators.required],
      systolicBloodPressure: [0, Validators.required],
      diastolicBloodPressure: [0, Validators.required],
      temperature: [0, Validators.required],
      story: ['', Validators.required],
      engagementDate: [new Date(Date.now()), Validators.required],
      engagementType: ['', Validators.required],
      patient: [this.dialogData],
    });
  }

  initForUpdate() {
    const item = this.dialogData as Engagement;

    this.id = item.id;

    this.form = this.formBuilder.group({
      height: [item.height, Validators.required],
      weight: [item.weight, Validators.required],
      systolicBloodPressure: [item.systolicBloodPressure, Validators.required],
      diastolicBloodPressure: [
        item.diastolicBloodPressure,
        Validators.required,
      ],
      temperature: [item.temperature, Validators.required],
      story: [item.story, Validators.required],
      engagementDate: [item.engagementDate.toDate(), Validators.required],
      engagementType: [item.engagementType, Validators.required],
      patient: [item.patient],
    });
  }

  getEngagementTypes() {
    this.subscription = this.firestore
      .collection<EngagementTypeItem>(ENGAGEMENT_TYPE, (ref) =>
        ref.orderBy('name', 'asc')
      )
      .valueChanges({ idField: 'id' })
      .subscribe((x) => (this.engagementTypes = x));
  }

  get isForUpdate(): boolean {
    return 'patient' in this.dialogData;
  }

  compare(type1: EngagementTypeItem, type2: EngagementTypeItem) {
    return type1.id == type2.id;
  }
}
