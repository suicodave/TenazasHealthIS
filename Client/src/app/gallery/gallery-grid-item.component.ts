import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-grid-item',
  template: `
    <a [href]="item.path">
      <mat-card>
        <div class="grid grid-cols-3">
          <div class="labels col-span-2">
            <p class="text-lg text-blue-600">
              {{ item.name }}
            </p>

            <p class="text-sm text-gray-500">
              {{ item.description }}
            </p>
          </div>
          <div class="image flex justify-end">
            <img [src]="item?.image" class="h-32 w-32 object-contain" />
          </div>
        </div>
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

  image?: string;
}
