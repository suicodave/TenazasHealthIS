import { COLLECTION_NAME } from './../common/injection-tokens';
import { CheckUpTypeItem } from './check-up-type-item.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-check-up-type-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="save()">
      <h2 mat-dialog-title class="text-gray-600">New Check-Up Type</h2>
      <mat-dialog-content>
        <mat-form-field appearance="outline" class="w-full">
          <mat-label>Name</mat-label>
          <input matInput type="text" required formControlName="name" />
        </mat-form-field>
      </mat-dialog-content>
      <mat-dialog-actions align="end">
        <button
          mat-button
          type="submit"
          class="rounded-lg text-white bg-blue-500"
        >
          Save
        </button>
        <button
          mat-button
          mat-dialog-close
          class="rounded-lg text-gray-600"
          type="button"
          [disabled]="isSaving"
        >
          Cancel
        </button>
      </mat-dialog-actions>
    </form>
  `,
})
export class CheckUpTypeFormComponent implements OnInit {
  form!: FormGroup;
  userId!: string;

  isSaving = false;

  collectionRef!: AngularFirestoreCollection<CheckUpTypeItem>;

  constructor(
    private formBuilder: FormBuilder,
    private fireStore: AngularFirestore,
    private auth: AngularFireAuth,
    private dialogRef: MatDialogRef<CheckUpTypeFormComponent>,
    private snackBar: MatSnackBar,

    @Inject(COLLECTION_NAME) private collectionName: string
  ) {
    this.collectionRef = this.fireStore.collection(this.collectionName);
  }

  ngOnInit(): void {
    this.getCurrentUser();
    this.initForm();
  }

  getCurrentUser() {
    this.auth.currentUser.then((x) => {
      this.userId = x?.email!;
    });
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  save() {
    const value: any = this.form.value;

    value.createdBy = this.userId;

    value.createdAt = new Date(Date.now());

    this.isSaving = true;

    this.collectionRef
      .add(value)
      .then((x) => {
        this.dialogRef.close();
      })
      .catch((x) => {
        this.snackBar.open('Unable to save. Please try again!', 'Ok', {
          duration: 3000,
        });
        this.form.reset();
      })
      .finally(() => {
        this.isSaving = false;
      });
  }
}
