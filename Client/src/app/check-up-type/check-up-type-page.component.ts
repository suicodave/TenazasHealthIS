import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-up-type-page',
  template: `
    <div class="bg-gray-200 w-full min-h-full flex justify-center items-center">
      <div class="w-2/5  ">
        <app-check-up-type-list></app-check-up-type-list>
      </div>
    </div>
  `,
})
export class CheckUpTypePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
