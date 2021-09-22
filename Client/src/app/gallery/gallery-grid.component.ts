import { Component, Input, OnInit } from '@angular/core';
import { GalleryGridItem } from './gallery-grid-item.component';

@Component({
  selector: 'app-gallery-grid',
  template: `
    <div class="grid grid-cols-3 gap 8">
      asd
      <app-gallery-grid-item *ngFor="let item of items" [item]="item">
      </app-gallery-grid-item>
    </div>
  `,
})
export class GalleryGridComponent implements OnInit {
  items: GalleryGridItem[] = [
    {
      name: 'Check-Up Types',
      path: 'CheckUpTypes',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
