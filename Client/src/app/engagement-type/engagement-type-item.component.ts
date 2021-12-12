import { AuditableModel } from '../common/dto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-engagement-type-item',
  template: `
    <div
      class="grid grid-cols-3 w-full items-center"
      (mouseenter)="showDelete = true"
      (mouseleave)="showDelete = false"
    >
      <p class="my-1 text-base">{{ item.name }}</p>

      <div class="meta place-self-center">
        <p class="my-1 text-xs text-gray-500">
          {{ item.createdAt!.toDate() | date: 'medium' }}
        </p>

        <p class="my-1 text-xs text-gray-500">
          {{ item.createdBy | userFullname | async }}
        </p>
      </div>

      <button
        mat-icon-button
        class="place-self-end"
        appDeleteTrigger
        [id]="item.id!"
        [ngClass]="{ hidden: !showDelete }"
        *ngIf="!readonly"
      >
        <mat-icon class="text-red-500"> delete_outline </mat-icon>
      </button>
    </div>
  `,
})
export class EngagementTypeItemComponent implements OnInit {
  @Input() item!: EngagementTypeItem;

  showDelete: boolean = false;

  @Input() readonly: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}

export interface EngagementTypeItem extends AuditableModel {
  name: string;
}
