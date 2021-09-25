import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engagement-type-form',
  template: `
    <app-form [form]="form" [formGroup]="form">
      <div>
        <mat-form-field appearance="outline" class="w-full">
          <mat-label>Name</mat-label>
          <input matInput type="text" required formControlName="name" />
        </mat-form-field>
      </div>
    </app-form>
  `,
})
export class EngagementTypeFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }
}
