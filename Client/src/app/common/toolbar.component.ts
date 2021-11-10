import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: `
    <mat-toolbar color="primary">
      <div class="flex justify-between items-center w-full">
        <a href="">Tenazas Health Information System</a>

        <div class="controls">
          <button mat-icon-button>
            <mat-icon class="mat-18">power_settings_new</mat-icon>
          </button>
        </div>
      </div>
    </mat-toolbar>
  `,
})
export class ToolbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
