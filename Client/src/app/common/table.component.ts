import { Observable } from 'rxjs/internal/Observable';
import {
  COLLECTION_DISPLAY_NAME,
  COLLECTION_NAME,
  DOMAIN_DISPLAY_NAME,
} from './injection-tokens';
import { AngularFirestore, DocumentData, Query } from '@angular/fire/firestore';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
} from '@angular/core';
import {
  MatColumnDef,
  MatTable,
  MatTableDataSource,
} from '@angular/material/table';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  template: `
    <mat-card class="p-0  rounded-xl">
      <mat-card class="rounded-t-xl mat-elevation-z0 ">
        <div class="flex justify-between items-center">
          <div class="text-gray-600 text-lg">{{ displayName }}</div>
          <div class="controls ">
            <button
              mat-button
              class="bg-blue-500  rounded-lg text-white"
              appFormCreateTrigger
            >
              Add {{ domainName }}
            </button>
          </div>
        </div>
      </mat-card>

      <div class="max-h-96 overflow-y-auto">
        <table
          mat-table
          [dataSource]="datasource"
          class="rounded-none   mat-elevation-z0 w-full"
        >
          <ng-content></ng-content>

          <tr mat-header-row *matHeaderRowDef="columns; sticky: true"></tr>
          <tr mat-row *matRowDef="let row; columns: columns"></tr>
        </table>
      </div>
      <mat-paginator
        class="rounded-b-xl"
        [length]="100"
        [pageSize]="10"
        [pageSizeOptions]="[10, 25, 100]"
        aria-label="Select page"
      >
      </mat-paginator>
    </mat-card>
  `,
  styleUrls: ['./table.component.scss'],
})
export class TableComponent
  implements OnInit, AfterContentInit, AfterViewInit, OnDestroy
{
  @Input() columns: string[] = [];

  @Input() orderByField: string = 'createdAt';

  @Input() orderByDirection: 'desc' | 'asc' = 'desc';

  @Input() sort: MatSort | null = null;

  @ContentChildren(MatColumnDef) columnDefs!: QueryList<MatColumnDef>;

  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  datasource!: MatTableDataSource<any>;

  subscription: Subscription = new Subscription();

  items: Observable<any[]> = new Observable();

  constructor(
    private firestore: AngularFirestore,
    @Inject(COLLECTION_NAME) private collectionName: string,

    @Inject(COLLECTION_DISPLAY_NAME) public displayName: string,

    @Inject(DOMAIN_DISPLAY_NAME) public domainName: string
  ) {}

  ngAfterViewInit(): void {
    // this.datasource.sort = this.sort;
  }
  ngAfterContentInit(): void {
    this.columnDefs.forEach((columnDef) => this.table.addColumnDef(columnDef));
  }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadData() {
    this.items = this.firestore
      .collection(this.collectionName, (ref) => {
        const query: Query<DocumentData> = ref.orderBy(
          this.orderByField,
          this.orderByDirection
        );

        return query;
      })
      .valueChanges({ idField: 'id' });
    this.subscription = this.items.subscribe((x) => {
      this.datasource = new MatTableDataSource(x);
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sort;
    });
  }
}
