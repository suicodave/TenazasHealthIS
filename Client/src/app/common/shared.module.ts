import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteTriggerDirective } from './delete/delete-trigger.directive';
import { DeleteDialogComponent } from './delete/delete-dialog.component';

@NgModule({
  declarations: [DeleteTriggerDirective, DeleteDialogComponent],
  imports: [CommonModule, MaterialModule],
  exports: [DeleteTriggerDirective, DeleteDialogComponent],
})
export class SharedModule {}
