import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-page',
  template: `
    <div class="w-full min-h-full bg-gray-200 flex justify-center items-center">
      <div class="w-4/5">
        <app-user-table></app-user-table>
      </div>
    </div>
  `,
})
export class UserPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
