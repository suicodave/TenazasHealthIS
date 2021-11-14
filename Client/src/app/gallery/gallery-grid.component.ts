import { Component, Input, OnInit } from '@angular/core';
import { GalleryGridItem } from './gallery-grid-item.component';

@Component({
  selector: 'app-gallery-grid',
  template: `
    <div class="w-full bg-gray-200 min-h-full relative">
      <app-toolbar></app-toolbar>

      <div class="grid grid-cols-3 gap-8 p-8 ">
        <app-gallery-grid-item *ngFor="let item of items" [item]="item">
        </app-gallery-grid-item>
      </div>
      <div class="illustrations w-full flex justify-evenly">
        <img class="h-80 w-80 " src="assets/dataprocessing.png" />
        <img class="h-80 w-80" src="assets/health.png" />
      </div>
    </div>
  `,
})
export class GalleryGridComponent implements OnInit {
  items: GalleryGridItem[] = [
    {
      name: 'Engagement Types',
      path: './EngagementTypes',
      description: 'Manage what services your patient can avail.',
      image: 'assets/type.png',
    },
    {
      name: 'Patients',
      path: './Patients',
      description: 'Manage your patient\'s personal information.',
      image: 'assets/doctor.png',
    },
    {
      name: 'Users',
      path: './Users',
      description: 'Manage user credentials and access.',
      image: 'assets/auth.png',
    },
    {
      name: 'Roles',
      path: './Roles',
      description: "Configure what user's can do in the system.",
      image: 'assets/role.png',
    },
    {
      name: 'Engagements',
      path: './Engagements',
      description: 'See what services your patients have engaged with you.',
      image: 'assets/engagement.png',
    },
    {
      name: 'Reports',
      path: './Reports',
      description: 'Generate reports monthly or by date range.',
      image: 'assets/report.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
