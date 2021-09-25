import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engagement-type-page',
  template: `
    <div class="bg-gray-200 w-full min-h-full flex justify-center items-center">
      <div class="w-2/5  ">
        <app-engagement-type-list></app-engagement-type-list>
      </div>
    </div>
  `,
})
export class EngagementTypePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
