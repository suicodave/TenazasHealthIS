import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Engagement } from './engagement-dto';

@Component({
  selector: 'app-engagagement-detail',
  template: `
    <h1 mat-dialog-title >Enagement Detail ({{ data.id }})</h1>
    <mat-dialog-content>
      <h2 class="text-blue-600">Created At</h2>
      <p>{{ data.createdAt.toDate() | date }}</p>

      <h2 class="text-blue-600">Created By</h2>
      <p>{{ data.createdBy | userFullname | async }}</p>

      <h2 class="text-blue-600">Story</h2>
      <div [innerText]="data.story"></div>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button matDialogClose>Close</button>
    </mat-dialog-actions>
  `,
})
export class EngagementDetailComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Engagement) {}

  ngOnInit(): void {}
}
