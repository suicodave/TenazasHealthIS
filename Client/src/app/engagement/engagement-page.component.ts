import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engagement-page',
  template: `
    <div class="w-full min-h-full bg-gray-200 flex justify-center items-center">
      <div class="w-4/5">
        <app-engagement-table></app-engagement-table>
      </div>
    </div>
  `,
})
export class EngagementPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
