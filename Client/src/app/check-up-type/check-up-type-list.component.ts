import { AuditableModel } from './../common/dto';
import { COLLECTION_NAME } from './../common/injection-tokens';
import { CheckUpTypeItem } from './check-up-type-item.component';
import { CheckUpTypeFormComponent } from './check-up-type-form.component';
import { Component, Inject, OnInit, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-check-up-type-list',
  template: `
    <mat-card>
      <div class="flex justify-between">
        <h1 class="text-gray-600">Check-Up Types</h1>
        <div class="controls ">
          <button
            mat-button
            class="bg-blue-500  rounded-lg text-white"
            appFormCreateTrigger
          >
            Add Type
          </button>
        </div>
      </div>
      <mat-list>
        <mat-divider *ngIf="items.length > 0"></mat-divider>
        <ng-container *ngFor="let item of items; last as isLast">
          <div class="p-2">
            <app-check-up-type-item [item]="item"></app-check-up-type-item>
          </div>
          <mat-divider *ngIf="!isLast"></mat-divider>
        </ng-container>
      </mat-list>
    </mat-card>
  `,
})
export class CheckUpTypeListComponent implements OnInit {
  items: CheckUpTypeItem[] = [];

  collectionRef!: AngularFirestoreCollection<CheckUpTypeItem>;

  constructor(
    private firestore: AngularFirestore,

    @Inject(COLLECTION_NAME) private collectionName: string
  ) {
    this.collectionRef = this.firestore.collection(this.collectionName);
  }

  ngOnInit(): void {
    this.collectionRef.valueChanges({ idField: 'id' }).subscribe((x) => {
      this.items = x;
    });
  }
}
