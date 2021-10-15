import { AuditableModel } from './../common/dto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-table',
  template: `<app-table
    [columns]="columns"
    matSort
    #matSort="matSort"
    [sort]="matSort"
  >
    <ng-container matColumnDef="id">
      <th mat-header-cell *matHeaderCellDef>Id</th>
      <td mat-cell *matCellDef="let element">{{ element.id }}</td>
    </ng-container>
    <ng-container matColumnDef="name">
      <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>
      <td mat-cell *matCellDef="let element">{{ element.name }}</td>
    </ng-container>

    <ng-container matColumnDef="createdAt">
      <th mat-header-cell *matHeaderCellDef mat-sort-header>Created At</th>
      <td mat-cell *matCellDef="let element">
        {{ element.createdAt.toDate() | date }}
      </td>
    </ng-container>

    <ng-container matColumnDef="options">
      <th mat-header-cell *matHeaderCellDef></th>
      <td mat-cell *matCellDef="let element">
        <div class="w-full flex justify-end text-gray-500">
          <button mat-icon-button [matMenuTriggerFor]="menu">
            <mat-icon>more_vert</mat-icon>
          </button>
          <mat-menu #menu="matMenu">
            <button mat-menu-item appDeleteTrigger [id]="element.id!">
              Delete
            </button>
          </mat-menu>
        </div>
      </td>
    </ng-container>
  </app-table>`,
})
export class RoleTableComponent {
  columns = ['id', 'name', 'createdAt', 'options'];
}

export interface Role extends AuditableModel {
  name: string;
}
