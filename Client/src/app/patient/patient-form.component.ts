import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Patient } from './patient-table.component';

@Component({
  selector: 'app-patient-form',
  template: `
    <app-form [form]="form" [formGroup]="form" [id]="data?.id">
      <div class="grid grid-cols-3 gap-4">
        <mat-form-field appearance="outline" class="w-full">
          <mat-label>First Name</mat-label>
          <input matInput type="text" required formControlName="firstName" />
        </mat-form-field>
        <mat-form-field appearance="outline" class="w-full">
          <mat-label>Middle Name</mat-label>
          <input matInput type="text" required formControlName="middleName" />
        </mat-form-field>
        <mat-form-field appearance="outline" class="w-full">
          <mat-label>Last Name</mat-label>
          <input matInput type="text" required formControlName="lastName" />
        </mat-form-field>
        <mat-form-field appearance="outline" class="w-full col-span-3">
          <mat-label>Address</mat-label>
          <input matInput type="text" required formControlName="address" />
        </mat-form-field>

        <mat-form-field appearance="outline" class="w-full">
          <mat-label>Birthdate</mat-label>
          <input
            matInput
            [matDatepicker]="picker"
            formControlName="birthDate"
          />
          <mat-datepicker-toggle
            matSuffix
            [for]="picker"
          ></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Sex</mat-label>
          <mat-select formControlName="sex">
            <mat-option *ngFor="let sex of sexes" [value]="sex">
              {{ sex }}
            </mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Civil Status</mat-label>
          <mat-select formControlName="civilStatus">
            <mat-option
              *ngFor="let civilStatus of civilStatuses"
              [value]="civilStatus"
            >
              {{ civilStatus }}
            </mat-option>
          </mat-select>
        </mat-form-field>
      </div>
    </app-form>
  `,
})
export class PatientFormComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    firstName: [this.data?.firstName, Validators.required],
    middleName: [this.data?.middleName, Validators.required],
    lastName: [this.data?.lastName, Validators.required],
    sex: [this.data?.sex, Validators.required],
    civilStatus: [this.data?.civilStatus, Validators.required],
    birthDate: [this.data?.birthDate.toDate(), Validators.required],
    address: [this.data?.address, Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Patient
  ) {}

  ngOnInit(): void {}

  get sexes() {
    return ['Male', 'Female'];
  }

  get civilStatuses() {
    return ['Single', 'Married', 'Annuled', 'Divorced', 'Widow', 'Widower'];
  }
}
