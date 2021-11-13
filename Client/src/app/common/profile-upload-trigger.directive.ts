import { ProfileUploadComponent } from './profile-upload.component';
import { Directive, HostListener, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Directive({
  selector: '[appProfileUploadTrigger]',
})
export class ProfileUploadTriggerDirective {
  @Input() id: string | undefined;

  constructor(private dialog: MatDialog) {}

  @HostListener('click', ['event'])
  openUploader() {
    this.dialog.open(ProfileUploadComponent, {
      data: this.id,
      minWidth: '680px',
    });
  }
}
