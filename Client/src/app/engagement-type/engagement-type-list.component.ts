import { AuditableModel } from '../common/dto';
import { COLLECTION_NAME } from '../common/injection-tokens';
import { EngagementTypeItem } from './engagement-type-item.component';
import { Component, Inject, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-engagement-type-list',
  template: `
    <mat-card class="rounded-lg">
      <div class="flex justify-between">
        <h1 class="text-gray-600">Engagement Types</h1>
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
            <app-engagement-type-item [item]="item"></app-engagement-type-item>
          </div>
          <mat-divider *ngIf="!isLast"></mat-divider>
        </ng-container>
      </mat-list>
    </mat-card>
  `,
})
export class EngagementTypeListComponent implements OnInit {
  items: EngagementTypeItem[] = [];

  collectionRef!: AngularFirestoreCollection<EngagementTypeItem>;

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
