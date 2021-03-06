import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  template: `
    <mat-card>
      <h2 class="text-center mt-8 text-blue-600">
        Tenazas Health Information Sytem
      </h2>
      <form [formGroup]="form" (ngSubmit)="login()">
        <div class="inputs grid grid-cols-1 m-12 gap-4">
          <mat-form-field appearance="outline">
            <mat-label>Email</mat-label>
            <input matInput type="email" required formControlName="email" />
          </mat-form-field>

          <mat-form-field appearance="outline">
            <mat-label>Password</mat-label>
            <input
              matInput
              [type]="hide ? 'password' : 'text'"
              required
              formControlName="password"
            />
            <button
              mat-icon-button
              matSuffix
              (click)="hide = !hide"
              [attr.aria-label]="'Hide password'"
              [attr.aria-pressed]="hide"
              type="button"
            >
              <mat-icon>{{ hide ? 'visibility_off' : 'visibility' }}</mat-icon>
            </button>
          </mat-form-field>

          <div class="flex justify-between items-center">
            <button
              mat-raised-button
              color="primary"
              [disabled]="!allowSubmit"
              type="submit"
              class="px-8 py-1"
            >
              Sign In
            </button>

            <a href="./auth/forgot-password">Reset Password</a>
          </div>
        </div>
      </form>
    </mat-card>
  `,
})
export class LoginFormComponent implements OnInit {
  form!: FormGroup;
  isSigningIn: boolean = false;

  hide: boolean = true;
  constructor(
    private fireAuth: AngularFireAuth,
    private formBuilder: FormBuilder,

    private snackBar: MatSnackBar,

    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  get allowSubmit(): boolean {
    return this.form.valid && !this.isSigningIn;
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    const values = this.form.value;

    this.isSigningIn = true;

    this.fireAuth
      .signInWithEmailAndPassword(values.email, values.password)
      .then((x) => {
        this.isSigningIn = false;
        this.router.navigate(['']);

        this.snackBar.open(`Signed in as ${x.user?.email}`, 'Ok', {
          duration: 2000,
        });
      })
      .catch((x) => {
        this.snackBar.open('Unable to sign in. Please try again!', 'Ok', {
          duration: 1200,
        });
        this.isSigningIn = false;
      });
  }
}
