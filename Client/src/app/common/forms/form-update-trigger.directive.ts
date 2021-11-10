import {
  Directive,
  HostListener,
  Inject,
  Input,
  ViewContainerRef,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UPDATE_DIALOG_COMPONENT } from '../injection-tokens';

@Directive({
  selector: '[appFormUpdateTrigger]',
})
export class FormUpdateTriggerDirective {
  @Input() data: any = undefined;

  constructor(
    private dialog: MatDialog,

    private containerRef: ViewContainerRef,

    @Inject(UPDATE_DIALOG_COMPONENT) private componentName: any
  ) {}

  @HostListener('click', ['$event'])
  openForm() {
    this.dialog.open(this.componentName, {
      viewContainerRef: this.containerRef,
      minWidth: '398px',
      data: this.data
    });
  }
}
