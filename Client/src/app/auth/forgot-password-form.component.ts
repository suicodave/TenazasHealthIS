import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as isEmail from 'isemail';

@Component({
  selector: 'app-forgot-password-form',
  template: `
    <mat-card>
      <form (ngSubmit)="sendResetLink()">
        <h2 class="text-blue-600">Reset Password</h2>

        <mat-card-content>
          <mat-form-field appearance="outline" class="w-full">
            <mat-label>Email</mat-label>
            <input
              matInput
              type="email"
              name="email"
              [(ngModel)]="email"
              email
              required
            />
          </mat-form-field>

          <div class="flex justify-end">
            <button mat-raised-button color="primary">Send Reset Link</button>
          </div>
        </mat-card-content>
      </form>
    </mat-card>
  `,
})
export class ForgotPasswordFormComponent implements OnInit {
  email: string | null = null;
  constructor(private auth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {}

  sendResetLink() {
    alert('Reset link has been sent to your email');

    this.auth.sendPasswordResetEmail(this.email!);

    this.router.navigate(['auth']);
  }
}
