import { COLLECTION_NAME, DOMAIN_DISPLAY_NAME } from './../injection-tokens';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-delete-dialog',
  template: `
    <p class="text-xl text-gray-600 mb-4">{{ displayName }}</p>

    <mat-dialog-content>
      Are you sure you want to delete "{{ id }}"?
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button
        mat-button
        type="button"
        class="rounded-lg text-white bg-blue-500"
        [disabled]="isDeleting"
        (click)="delete()"
      >
        Yes
      </button>
      <button
        mat-button
        mat-dialog-close
        class="rounded-lg text-gray-600"
        type="button"
      >
        No
      </button>
    </mat-dialog-actions>
  `,
})
export class DeleteDialogComponent implements OnInit {
  private collection!: AngularFirestoreCollection<any>;

  isDeleting = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public id: string,
    @Inject(COLLECTION_NAME) public collectionName: string,

    @Inject(DOMAIN_DISPLAY_NAME) public displayName: string,

    private dialogRef: MatDialogRef<DeleteDialogComponent>,

    private fireStore: AngularFirestore
  ) {
    this.collection = this.fireStore.collection(this.collectionName);
  }

  ngOnInit(): void {}

  delete() {
    this.isDeleting = true;

    this.collection.doc(this.id).delete();

    this.isDeleting = false;

    this.dialogRef.close();
  }
}
