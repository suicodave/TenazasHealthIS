import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-page',
  template: `
    <div class="w-full min-h-full bg-gray-200 flex justify-center items-center">
      <div class="w-4/5">
        <app-role-table></app-role-table>
      </div>
    </div>
  `,
})
export class RolePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
