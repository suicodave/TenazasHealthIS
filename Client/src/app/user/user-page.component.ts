import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-page',
  template: `
    <div class="w-full min-h-full bg-gray-200 ">
      <app-toolbar> </app-toolbar>
      <div class="flex justify-center items-center mt-8">
        <div class="w-4/5">
          <app-user-table></app-user-table>
        </div>
      </div>
    </div>
  `,
})
export class UserPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
