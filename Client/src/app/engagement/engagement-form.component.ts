import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engagement-form',
  template: `
    <app-form [form]="form" [formGroup]="form">
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

        <!-- <mat-form-field appearance="outline">
          <mat-label>Civil Status</mat-label>
          <mat-select formControlName="civilStatus">
            <mat-option
              *ngFor="let civilStatus of civilStatuses"
              [value]="civilStatus"
            >
              {{ civilStatus }}
            </mat-option>
          </mat-select>
        </mat-form-field> -->
      </div>
    </app-form>
  `,
})
export class EngagementFormComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    height: [0, Validators.required],
    weight: [0, Validators.required],
    systolicBloodPressure: [0, Validators.required],
    diastolicBloodPressure: [0, Validators.required],
    temperature: [0, Validators.required],
    story: ['', Validators.required],
    engagementDate: [new Date(Date.now()), Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
