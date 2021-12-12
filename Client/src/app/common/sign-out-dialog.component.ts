import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-out-dialog',
  template: `
    <h2 matDialogTitle>Confirm Sign Out</h2>

    <mat-dialog-content>
      Are you sure you want to sign out?
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-raised-button color="primary" matDialogClose appSignOut>Yes</button>
      <button mat-button matDialogClose>No</button>
    </mat-dialog-actions>
  `,
})
export class SignOutDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
