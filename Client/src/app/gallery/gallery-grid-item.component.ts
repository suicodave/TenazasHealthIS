import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-grid-item',
  template: `
    <a [href]="item.path">
      <mat-card>
        <p class="text-lg text-blue-600">
          {{ item.name }}
        </p>

        <p class="text-sm text-gray-500">
          {{ item.description }}
        </p>
      </mat-card>
    </a>
  `,
})
export class GalleryGridItemComponent implements OnInit {
  @Input() item!: GalleryGridItem;

  constructor() {}

  ngOnInit(): void {}
}

export interface GalleryGridItem {
  name: string;

  description?: string;

  path: string;
}
