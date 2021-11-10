import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engagement-type-page',
  template: `
    <div class="bg-gray-200 w-full min-h-full ">
      <app-toolbar></app-toolbar>
      <div class="flex justify-center items-center mt-8">
        <div class="w-2/5  ">
          <app-engagement-type-list></app-engagement-type-list>
        </div>
      </div>
    </div>
  `,
})
export class EngagementTypePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
