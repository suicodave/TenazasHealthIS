import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-grid-item',
  template: ` <mat-card>
    {{ item.name }}
  </mat-card>`,
})
export class GalleryGridItemComponent implements OnInit {
  @Input() item!: GalleryGridItem;

  constructor() {}

  ngOnInit(): void {}
}

export interface GalleryGridItem {
  name: string;

  path: string;
}
