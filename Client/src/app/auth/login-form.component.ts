import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  template: `
    <mat-card>
      <div class="inputs grid grid-cols-1 m-12">
        <mat-form-field appearance="outline">
          <mat-label>Email</mat-label>
          <input matInput type="email" required />
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Password</mat-label>
          <input matInput type="password" required />
        </mat-form-field>

        <div class="flex justify-center">
          <button mat-raised-button color="primary">Login</button>
        </div>
      </div>
    </mat-card>
  `,
})
export class LoginFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
