import { AuditableModel } from './../common/dto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-up-type-item',
  template: `
    <div class="grid grid-cols-3 w-full items-center">
      <p class="my-1 text-base">{{ item.name }}</p>

      <div class="meta place-self-center">
        <p class="my-1 text-xs text-gray-500">
          {{ item.createdAt!.toDate() | date: 'medium' }}
        </p>

        <p class="my-1 text-xs text-gray-500">
          {{ item.createdBy }}
        </p>
      </div>

      <button
        mat-icon-button
        class="place-self-end"
        appDeleteTrigger
        [id]="item.id!"
      >
        <mat-icon class="text-gray-500"> delete_outline </mat-icon>
      </button>
    </div>
  `,
})
export class CheckUpTypeItemComponent implements OnInit {
  @Input() item!: CheckUpTypeItem;

  constructor() {}

  ngOnInit(): void {}
}

export interface CheckUpTypeItem extends AuditableModel {
  name: string;
}
