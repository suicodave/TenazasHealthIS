import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteTriggerDirective } from './delete/delete-trigger.directive';
import { DeleteDialogComponent } from './delete/delete-dialog.component';
import { FormCreateTriggerDirective } from './forms/form-create-trigger.directive';
import { FormComponent } from './forms/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table.component';

@NgModule({
  declarations: [
    DeleteTriggerDirective,
    DeleteDialogComponent,
    FormCreateTriggerDirective,
    FormComponent,
    TableComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [
    DeleteTriggerDirective,
    DeleteDialogComponent,
    FormCreateTriggerDirective,
    FormComponent,
    TableComponent,
    MaterialModule,
  ],
})
export class SharedModule {}
