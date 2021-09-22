import { COLLECTION_NAME, DIALOG_COMPONENT } from './../injection-tokens';
import {
  Directive,
  HostListener,
  Inject,
  ViewContainerRef,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Directive({
  selector: '[appFormCreateTrigger]',
})
export class FormCreateTriggerDirective {
  constructor(
    @Inject(DIALOG_COMPONENT) private componentName: any,
    private dialog: MatDialog,
    private containerRef: ViewContainerRef
  ) {}

  @HostListener('click', ['$event'])
  openForm() {
    this.dialog.open(this.componentName, {
      viewContainerRef: this.containerRef,
      minWidth: '398px',
    });
  }
}
