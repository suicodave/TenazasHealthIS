import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-page',
  template: `
    <div class="w-full min-h-full bg-gray-200 ">
      <app-toolbar></app-toolbar>
      <div class="mx-4 mt-8">
        <app-patient-table></app-patient-table>
      </div>
    </div>
  `,
})
export class PatientPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
