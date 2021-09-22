import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  template: `
    <div class="bg-gray-200 w-full min-h-full flex justify-center items-center">
      <div class="w-3/12">
        <app-login-form> </app-login-form>
      </div>
    </div>
  `,
})
export class LoginPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
