import { DOMAIN_DISPLAY_NAME, COLLECTION_NAME } from './../injection-tokens';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialogRef } from '@angular/material/dialog';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="save()">
      <h2 mat-dialog-title class="text-gray-600">New {{ displayName }}</h2>
      <mat-dialog-content>
        <ng-content></ng-content>
      </mat-dialog-content>
      <mat-dialog-actions align="end">
        <button
          mat-button
          type="submit"
          class="rounded-lg text-white bg-blue-500"
          [disabled]="isSaving"
        >
          Save
        </button>
        <button
          mat-button
          mat-dialog-close
          class="rounded-lg text-gray-600"
          type="button"
        >
          Cancel
        </button>
      </mat-dialog-actions>
    </form>
  `,
})
export class FormComponent implements OnInit {
  @Input() form: FormGroup = this.formBuilder.group({});
  collectionRef!: AngularFirestoreCollection<any>;
  userId!: string;
  isSaving: boolean = false;

  constructor(
    @Inject(DOMAIN_DISPLAY_NAME) public displayName: string,
    @Inject(COLLECTION_NAME) private collectionName: string,
    private firestore: AngularFirestore,
    private auth: AngularFireAuth,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<FormComponent>
  ) {
    this.collectionRef = this.firestore.collection(this.collectionName);
  }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.auth.currentUser.then((x) => {
      this.userId = x?.email!;
    });
  }

  save() {
    const value: any = this.form.value;

    if (!this.form.valid) {
      return;
    }

    value.createdBy = this.userId;

    value.createdAt = new Date(Date.now());

    this.isSaving = true;

    this.collectionRef.add(value);

    this.isSaving = false;

    this.dialogRef.close();
  }
}
