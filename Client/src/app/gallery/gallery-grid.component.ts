import { Component, Input, OnInit } from '@angular/core';
import { GalleryGridItem } from './gallery-grid-item.component';

@Component({
  selector: 'app-gallery-grid',
  template: `
    <div class="w-full bg-gray-200 h-full">
      <app-toolbar></app-toolbar>

      <div class="grid grid-cols-3 gap-8 p-32 ">
        <app-gallery-grid-item *ngFor="let item of items" [item]="item">
        </app-gallery-grid-item>
      </div>
    </div>
  `,
})
export class GalleryGridComponent implements OnInit {
  items: GalleryGridItem[] = [
    {
      name: 'Engagement Types',
      path: './EngagementTypes',
      description: 'Manage Engagement Types.',
    },
    {
      name: 'Patients',
      path: './Patients',
      description: 'Manage all patients.',
    },
    {
      name: 'Users',
      path: './Users',
      description: 'Manage user credentials.',
    },
    {
      name: 'Roles',
      path: './Roles',
      description: "Configure what user's can access in the system.",
    },
    {
      name: 'Engagements',
      path: './Engagements',
      description: 'View all engagements.',
    },
    {
      name: 'Reports',
      path: './Reports',
      description: 'Generate reports monthly or by date range.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
