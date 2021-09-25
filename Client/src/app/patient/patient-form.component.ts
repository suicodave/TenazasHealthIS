import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-form',
  template: `
    <app-form [form]="form" [formGroup]="form">
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
    firstName: ['', Validators.required],
    middleName: ['', Validators.required],
    lastName: ['', Validators.required],
    sex: ['', Validators.required],
    civilStatus: ['', Validators.required],
    birthDate: ['', Validators.required],
    address: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  get sexes() {
    return ['Male', 'Female'];
  }

  get civilStatuses() {
    return ['Single', 'Married', 'Annuled', 'Divorced', 'Widow', 'Widower'];
  }
}
