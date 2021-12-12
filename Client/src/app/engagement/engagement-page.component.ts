import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engagement-page',
  template: `
    <div class="w-full min-h-full bg-gray-200 ">
      <app-toolbar></app-toolbar>
      <div class="px-8 w-full mt-8">
        <app-engagement-table></app-engagement-table>
      </div>
    </div>
  `,
})
export class EngagementPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
