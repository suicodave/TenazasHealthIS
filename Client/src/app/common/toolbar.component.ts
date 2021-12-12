import { User } from './../user/user-table.component';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { MatDialog } from '@angular/material/dialog';
import { SignOutDialogComponent } from './sign-out-dialog.component';

@Component({
  selector: 'app-toolbar',
  template: `
    <mat-toolbar color="primary">
      <div class="flex justify-between items-center w-full">
        <a href="">Tenazas Health Information System</a>

        <div class="controls">
          <span class="text-sm mr-4"> {{ user?.email }} </span>
          <button mat-icon-button (click)="confirmSignOut()">
            <mat-icon class="mat-18">power_settings_new</mat-icon>
          </button>
        </div>
      </div>
    </mat-toolbar>
  `,
})
export class ToolbarComponent implements OnInit {
  constructor(private auth: AuthService, private dialog: MatDialog) {}

  user: User | null = null;

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    return this.auth.getCurrentUser().subscribe((x) => (this.user = x));
  }

  confirmSignOut() {
    this.dialog.open(SignOutDialogComponent, {
      minWidth: '480px',
    });
  }
}
