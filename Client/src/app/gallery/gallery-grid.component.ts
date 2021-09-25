import { Component, Input, OnInit } from '@angular/core';
import { GalleryGridItem } from './gallery-grid-item.component';

@Component({
  selector: 'app-gallery-grid',
  template: `
    <h1 class="text-center">Modules</h1>
    <div class="grid grid-cols-3 gap-8 p-32 ">
      <app-gallery-grid-item *ngFor="let item of items" [item]="item">
      </app-gallery-grid-item>
    </div>
  `,
})
export class GalleryGridComponent implements OnInit {
  items: GalleryGridItem[] = [
    {
      name: 'Engagement Types',
      path: './EngagementTypes',
    },
    {
      name: 'Patients',
      path: './Patients',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
