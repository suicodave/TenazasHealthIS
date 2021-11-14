import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-property-card',
  template: `
    <mat-card class="flex items-center gap-4" >
      <mat-icon class="text-xl text-blue-600">{{ icon }} </mat-icon>

      <div class="labels">
        <p class="mb-1 text-gray-700 text-base">
          <ng-content></ng-content>
        </p>
        <p class="mb-0 text-xs text-yellow-500">{{ key }}</p>
      </div>
    </mat-card>
  `,
})
export class PatientPropertyCardComponent implements OnInit {
  @Input() key!: string;

  @Input() icon: string = 'badge';

  constructor() {}

  ngOnInit(): void {}
}
