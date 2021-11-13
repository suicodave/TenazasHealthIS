import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { PATIENT } from './collection-names';

@Component({
  selector: 'app-profile-upload',
  template: `
    <div
      class="h-96 justify-center items-center"
      ngx-dropzone
      [accept]="'image/*'"
      (change)="onSelect($event)"
      [multiple]="false"
    >
      <ngx-dropzone-label>
        <div>
          <h2 class="text-blue-600">Upload Image</h2>
        </div>
      </ngx-dropzone-label>
      <ngx-dropzone-image-preview
        ngProjectAs="ngx-dropzone-preview"
        *ngFor="let f of files"
        [file]="f"
        [removable]="true"
        (removed)="onRemove(f)"
        class="w-4/5 h-4/5"
      >
      </ngx-dropzone-image-preview>
    </div>

    <mat-dialog-actions align="end">
      <button
        mat-raised-button
        color="primary"
        (click)="upload()"
        *ngIf="files.length > 0 && !isUploading"
      >
        Upload
      </button>
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `,
})
export class ProfileUploadComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) private dialogData: string,

    private http: HttpClient,

    private cloudinary: Cloudinary,

    private firestore: AngularFirestore,

    private dialogRef: MatDialogRef<ProfileUploadComponent>
  ) {}

  ngOnInit(): void {}

  files: File[] = [];

  isUploading = false;

  onSelect(event: any) {
    this.files = [];
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  upload() {
    const file: File = this.files[0];

    const path: string = `https://api.cloudinary.com/v1_1/${
      this.cloudinary.config().cloud_name
    }/image/upload`;

    const headers = new HttpHeaders({
      'X-Requested-With': 'XMLHttpRequest',
    });

    let form = new FormData();

    form.append('file', file);

    form.append('upload_preset', 'TenazasHIS');

    this.isUploading = true;

    this.http
      .post(path, form, {
        headers: headers,
      })
      .subscribe(
        (x: any) => {
          const imagePath = x.secure_url;

          this.updatePatientProfile(imagePath);

          this.isUploading = false;

          this.dialogRef.close();
        },
        (x) => (this.isUploading = false)
      );
  }

  updatePatientProfile(url: string) {
    this.firestore.collection(PATIENT).doc(this.dialogData).update({
      profileImage: url,
    });
  }
}
