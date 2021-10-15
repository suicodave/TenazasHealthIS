import { ROLE } from './../common/collection-names';
import {
  COLLECTION_DISPLAY_NAME,
  COLLECTION_NAME,
  DIALOG_COMPONENT,
  DOMAIN_DISPLAY_NAME,
} from './../common/injection-tokens';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolePageComponent } from './role-page.component';
import { RoleTableComponent } from './role-table.component';
import { RoleFormComponent } from './role-form.component';
import { SharedModule } from '../common/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: RolePageComponent,
  },
];

@NgModule({
  declarations: [RolePageComponent, RoleTableComponent, RoleFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  exports: [RolePageComponent, RoleTableComponent, RoleFormComponent],
  providers: [
    {
      provide: COLLECTION_NAME,
      useValue: ROLE,
    },
    {
      provide: DIALOG_COMPONENT,
      useValue: RoleFormComponent,
    },
    {
      provide: DOMAIN_DISPLAY_NAME,
      useValue: 'Role',
    },
    {
      provide: COLLECTION_DISPLAY_NAME,
      useValue: ROLE,
    },
  ],
})
export class RoleModule {}
