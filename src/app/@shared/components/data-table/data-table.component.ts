import {
  Component,
  EventEmitter, Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { environment as env } from './../../../../environments/environment';
import { IParams } from './../../../@core/interfaces/params';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  perPageOptions: number[] = env.perPageOptions;
  displayedColumns: any = [];
  pageEvent: PageEvent | undefined;
  pageSize: number | undefined;
  resources: string | undefined;
  dynamicButton: any;
  pageIndex!: number;

  @Input() dataSource!: any;
  @Input() columns: any;
  @Input() params!: IParams;

  @Output() listParam = new EventEmitter<{ params: IParams }>();
  @Output() eventActions = new EventEmitter<{ action: string, row: any }>();

  paginator: any;
  pageSizeOptions!: number;
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
  }

  sort: any;
  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    setTimeout(() => {
      this.pageSize = this.params.page_size;
      this.sort.active = this.params.order_by;
      this.sort.direction = this.params.direction;
      this.pageIndex = this.params.page;
    }, 1);
  }

  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = this.columns.map((c: any) => c.columnDef);
    // this.displayedColumns.unshift('index');
    this.DynamicButton();
  }

  DynamicButton(): void {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.columns.length; i++) {
      const element = this.columns[i];
      if (element.columnDef === 'action') {
        this.dynamicButton = element.dynamicBtn;
      }
    }
  }

  sortData(event: any): void {
    this.paginator.pageIndex = 0;
    this.params.page_size = this.paginator.pageSize;
    this.params.page = 0;
    this.params.order_by = event.active;
    this.params.direction = event.direction;

    return this.listParam.emit({
      params: this.params
    });
  }

  paginatorHandler(event: PageEvent): any {
    this.params.page_size = this.paginator.pageSize;
    this.params.page = event.pageIndex;
    this.listParam.emit({
      params: this.params,
    });
    return event;
  }

}

