import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-page',
  template: `
    <div class="w-full min-h-full bg-gray-200 flex justify-center items-center">
      <div class="w-4/5">
        <app-patient-table></app-patient-table>
      </div>
    </div>
  `,
})
export class PatientPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
