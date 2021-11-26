import { RoleBasedComponent } from './../common/role-based-component';
import { Subscription } from 'rxjs';
import { Role } from './../role/role-table.component';
import { AuditableModel } from './../common/dto';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../common/auth.service';

@Component({
  selector: 'app-user-table',
  template: `
    <app-table
      [columns]="displayedColumns"
      orderByField="createdAt"
      orderByDirection="desc"
      matSort
      #matSort="matSort"
      [sort]="matSort"
      [readonly]="!isAdminRole"
    >
      <ng-container matColumnDef="id">
        <th mat-header-cell *matHeaderCellDef>Id</th>
        <td mat-cell *matCellDef="let element">{{ element?.id }}</td>
      </ng-container>
      <ng-container matColumnDef="email">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>E-mail</th>
        <td mat-cell *matCellDef="let element">{{ element?.email }}</td>
      </ng-container>

      <ng-container matColumnDef="firstName">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>First Name</th>
        <td mat-cell *matCellDef="let element">{{ element?.firstName }}</td>
      </ng-container>

      <ng-container matColumnDef="middleName">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Middle Name</th>
        <td mat-cell *matCellDef="let element">{{ element?.middleName }}</td>
      </ng-container>

      <ng-container matColumnDef="lastName">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Last Name</th>
        <td mat-cell *matCellDef="let element">{{ element?.lastName }}</td>
      </ng-container>

      <ng-container matColumnDef="role">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Role</th>
        <td mat-cell *matCellDef="let element">{{ element?.role.name }}</td>
      </ng-container>

      <ng-container matColumnDef="createdAt">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Created At</th>
        <td mat-cell *matCellDef="let element">
          {{ element?.createdAt.toDate() | date: 'mediumDate' }}
        </td>
      </ng-container>

      <ng-container matColumnDef="options">
        <th mat-header-cell *matHeaderCellDef></th>
        <td mat-cell *matCellDef="let element">
          <div class="flex justify-end">
            <button
              mat-icon-button
              [matMenuTriggerFor]="menu"
              class="text-yellow-600"
              *ngIf="isAdminRole"
            >
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
    </app-table>
  `,
})
export class UserTableComponent extends RoleBasedComponent {
  displayedColumns = [
    'id',
    'email',
    'firstName',
    'middleName',
    'lastName',
    'role',
    'createdAt',
    'options',
  ];
  constructor(auth: AuthService) {
    super(auth);
  }
}

export interface User extends AuditableModel {
  email: string;

  firstName: string;

  middleName: string;

  lastName: string;

  role: Role;
}
