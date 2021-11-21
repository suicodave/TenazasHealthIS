import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  template: `
    <div class="bg-gray-200 w-full min-h-full flex justify-evenly items-center">
      <img class="w-2/4" src="assets/authlanding.svg" alt="" />
      <div class="w-4/12">
        <app-login-form> </app-login-form>
      </div>
    </div>
  `,
})
export class LoginPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
