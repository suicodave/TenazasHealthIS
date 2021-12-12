import { DOMAIN_DISPLAY_NAME, COLLECTION_NAME } from './../injection-tokens';
import { FormGroup, FormBuilder } from '@angular/forms';
import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialogRef } from '@angular/material/dialog';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="save()">
      <h2 mat-dialog-title class="text-blue-500">
        {{ titlePrefix }} {{ displayName }}
      </h2>
      <mat-dialog-content>
        <ng-content></ng-content>
      </mat-dialog-content>
      <mat-dialog-actions align="end">
        <button
          mat-button
          type="submit"
          color="primary"
          mat-flat-button
          [disabled]="!isFormValid || isSaving"
        >
          Save
        </button>
        <button
          mat-button
          mat-dialog-close
          class="rounded-lg text-gray-600"
          type="button"
        >
          Cancel
        </button>
      </mat-dialog-actions>
    </form>
  `,
})
export class FormComponent implements OnInit {
  @Input() form: FormGroup = this.formBuilder.group({});
  collectionRef!: AngularFirestoreCollection<any>;
  userId!: string;
  isSaving: boolean = false;
  @Input() formValue: any = (form: FormGroup) => {
    return form.value;
  };

  @Input() id: string | undefined = undefined;

  @Output() added = new EventEmitter<any>();

  @Output() updated = new EventEmitter<any>();

  constructor(
    @Inject(DOMAIN_DISPLAY_NAME) public displayName: string,
    @Inject(COLLECTION_NAME) private collectionName: string,
    private firestore: AngularFirestore,
    private auth: AngularFireAuth,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<FormComponent>
  ) {
    this.collectionRef = this.firestore.collection(this.collectionName);
  }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.auth.currentUser.then((x) => {
      this.userId = x?.email!;
    });
  }

  save() {
    if (!this.form.valid) {
      return;
    }

    this.isSaving = true;

    const value = this.resolveAction();

    this.isSaving = false;

    this.dialogRef.close();
  }

  resolveAction() {
    if (this.isEditingMode) {
      const value = this.update(this.form);

      this.updated.emit(value);

      return value;
    }

    const value = this.create(this.form);

    this.added.emit(value);

    return value;
  }

  create(form: FormGroup) {
    const value: any = this.formValue(this.form);

    value.createdBy = this.userId;

    value.createdAt = new Date(Date.now());

    this.collectionRef.add(value);

    return value;
  }

  update(form: FormGroup) {
    const value: any = this.formValue(this.form);

    this.collectionRef.doc(this.id).update(value);
  }

  get isFormValid(): boolean {
    return this.form.valid;
  }

  get isEditingMode() {
    return this.id != undefined;
  }

  get titlePrefix() {
    return this.isEditingMode ? 'Edit' : 'New';
  }

  close() {
    this.dialogRef.close();
  }
}
