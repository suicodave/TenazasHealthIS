import * as collection from 'collect.js';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Engagement } from '../engagement/engagement-dto';
import { ENGAGEMENT } from '../common/collection-names';

@Component({
  selector: 'app-report-date-range-query',
  template: `
    <form [formGroup]="form" (ngSubmit)="getData()">
      <mat-form-field class="w-full">
        <mat-label>From Date</mat-label>
        <input matInput [matDatepicker]="fromDate" formControlName="fromDate" />
        <mat-datepicker-toggle
          matSuffix
          [for]="fromDate"
        ></mat-datepicker-toggle>
        <mat-datepicker #fromDate></mat-datepicker>
      </mat-form-field>

      <mat-form-field class="w-full">
        <mat-label>To Date</mat-label>
        <input matInput [matDatepicker]="toDate" formControlName="toDate" />
        <mat-datepicker-toggle matSuffix [for]="toDate"></mat-datepicker-toggle>
        <mat-datepicker #toDate></mat-datepicker>
      </mat-form-field>

      <div class="flex justify-end">
        <button mat-raised-button color="primary" [disabled]="isLoading">
          Generate
        </button>
      </div>
    </form>
  `,
})
export class ReportDateRangeQueryComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    fromDate: ['', Validators.required],
    toDate: ['', Validators.required],
  });

  isLoading: boolean = false;

  @Output() data: EventEmitter<ReportQuery> = new EventEmitter();

  constructor(
    private firestore: AngularFirestore,

    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  getData() {
    const dates = this.form.value;

    this.isLoading = true;

    this.firestore
      .collection<Engagement>(ENGAGEMENT, (ref) => {
        return ref
          .where('engagementDate', '>', dates.fromDate)
          .where('engagementDate', '<', dates.toDate);
      })
      .valueChanges({ idField: 'id' })
      .subscribe(
        (x) => {
          dates.data = x;

          this.data.emit(dates);

          this.isLoading = false;
        },
        (x) => (this.isLoading = false)
      );
  }
}

export interface ReportQuery {
  fromDate: Date;
  toDate: Date;

  data: Engagement[];
}
