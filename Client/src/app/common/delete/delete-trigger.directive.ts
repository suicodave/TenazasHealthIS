import { DeleteDialogComponent } from './delete-dialog.component';
import { COLLECTION_NAME } from './../injection-tokens';
import {
  Directive,
  HostListener,
  Inject,
  Input,
  ViewContainerRef,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Directive({
  selector: '[appDeleteTrigger]',
})
export class DeleteTriggerDirective {
  @Input() id: string | null = null;
  constructor(
    private dialog: MatDialog,

    private containerRef: ViewContainerRef
  ) {}

  @HostListener('click', ['$event'])
  openDeleteDialog() {
    this.dialog.open(DeleteDialogComponent, {
      viewContainerRef: this.containerRef,
      data: this.id,
      minWidth: '356px',
    });
  }
}
