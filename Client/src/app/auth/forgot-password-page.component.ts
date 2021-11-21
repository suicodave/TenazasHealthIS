import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password-page',
  template: `
    <div class="bg-gray-200 w-full min-h-full flex justify-center items-center">
      <div class="w-4/12">
        <app-forgot-password-form> </app-forgot-password-form>
      </div>
    </div>
  `,
})
export class ForgotPasswordPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
