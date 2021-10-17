import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { Role } from './../role/role-table.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormComponent } from '../common/forms/form.component';
import { ROLE } from '../common/collection-names';

@Component({
  selector: 'app-user-form',
  template: `
    <app-form
      [form]="form"
      [formGroup]="form"
      (added)="createUserCredentials($event)"
      [formValue]="resolveFormValue"
    >
      <div class="grid grid-cols-3 gap-4">
        <mat-form-field class="w-full">
          <mat-label>Email</mat-label>
          <input matInput type="email" required formControlName="email" />
        </mat-form-field>

        <mat-form-field class="w-full">
          <mat-label>Default Password</mat-label>
          <input matInput type="password" required formControlName="password" />
        </mat-form-field>

        <mat-form-field class="w-full">
          <mat-label>First Name</mat-label>
          <input matInput type="text" required formControlName="firstName" />
        </mat-form-field>

        <mat-form-field class="w-full">
          <mat-label>Midlle Name</mat-label>
          <input matInput type="text" required formControlName="middleName" />
        </mat-form-field>

        <mat-form-field class="w-full">
          <mat-label>Last Name</mat-label>
          <input matInput type="text" required formControlName="lastName" />
        </mat-form-field>

        <mat-form-field>
          <mat-label>Role</mat-label>
          <mat-select formControlName="role">
            <mat-option *ngFor="let item of roles" [value]="item">
              {{ item.name }}
            </mat-option>
          </mat-select>
        </mat-form-field>
      </div>
    </app-form>
  `,
})
export class UserFormComponent implements OnInit, OnDestroy {
  form: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    firstName: ['', Validators.required],
    middleName: ['', Validators.required],
    lastName: ['', Validators.required],
    role: ['', Validators.required],
  });

  private subscription = new Subscription();

  roles: Role[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private fireAuth: AngularFireAuth,

    private firestore: AngularFirestore
  ) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.getRoles();
  }

  createUserCredentials(data: any) {
    const { password, email } = this.form.value;

    this.fireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((x) => {});
  }

  resolveFormValue(formGroup: FormGroup) {
    const { password, ...rest } = formGroup.value;

    return rest;
  }

  getRoles() {
    this.subscription = this.firestore
      .collection<Role>(ROLE, (ref) => ref.orderBy('name', 'asc'))
      .valueChanges({ idField: 'id' })
      .subscribe((x) => (this.roles = x));
  }
}
