import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-page',
  template: `
    <div class="w-full min-h-full bg-gray-200 relative pt-8">
      <h1 class="text-center text-gray-600 relative my-8">Reports</h1>
      <div class="flex justify-center">
        <app-report-date-range-query></app-report-date-range-query>
      </div>
    </div>
  `,
})
export class ReportPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
