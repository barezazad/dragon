import {
  Component, EventEmitter, Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ICustomComponent } from 'src/app/@core/interfaces/custom-component';
import { IParams } from 'src/app/@core/interfaces/params';
import { HttpService } from 'src/app/@core/services/http.service';
import { environment as env } from '../../../../environments/environment';
import { AlertMessageComponent } from '../alert-message/alert-message.component';
import { CustomDialogFormComponent } from '../custom-dialog-form/custom-dialog-form.component';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {

  @Output() eventActions = new EventEmitter<{ action: string, title: string, row: any }>();

  perPageOptions: number[] = env.perPageOptions;
  pageEvent: PageEvent | undefined;
  pageSize: number | undefined;
  dynamicButton: any;
  pageIndex!: number;
  params!: IParams;
  paginator: any;

  count: any;
  dataSource: any;
  displayedColumns: any = [];
  @Input()
  config!: ICustomComponent;

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
  }

  constructor(
    private httpService: HttpService,
    public dialog: MatDialog,
  ) {
    const conf = this.config?.configure;
    this.params = {
      page_size: env.perPageOptions[0],
      page: 1,
      order_by: conf?.orderBy,
      direction: conf?.directionBy,
      search: '',
      select: '',
      filter: '',
    };
  }

  ngOnInit(): void {
    this.displayedColumns = this.config.columns.map((c: any) => c.columnDef);
    this.DynamicButton();
    this.list();
  }

  DynamicButton(): void {
    for (const el of this.config.columns) {
      if (el.columnDef === 'action') {
        this.dynamicButton = el.actions;
      }
    }
  }


  list(): void {
    const apiEndpoint = this.config?.configure?.endPoint;
    if (apiEndpoint) {
      this.httpService.list(apiEndpoint, this.params, true).subscribe(
        (res) => {
          this.count = res?.count;
          this.dataSource = res?.list;
        }
      );
    }
  }

  search(event: any): void {
    this.params.page = 1;
    this.params.search = event;
    this.list();
  }

  sortData(event: any): void {
    this.paginator.pageIndex = 1;
    this.params.page_size = this.paginator.pageSize;
    this.params.page = 1;
    this.params.order_by = event.active;
    this.params.direction = event.direction;
    this.list();
  }

  paginatorHandler(event: PageEvent): any {
    event.pageIndex = event.pageIndex + 1;
    this.params.page_size = this.paginator.pageSize;
    this.params.page = event.pageIndex;
    this.list();
    return event;
  }

  delete(id: number): void {
    const dialogConfirm = this.confirmMessage();
    dialogConfirm.afterClosed().subscribe((res: any) => {

      if (res === true) {
        const apiEndpoint = this.config?.configure?.endPoint;
        if (apiEndpoint) {
          this.httpService.delete(apiEndpoint, id).subscribe(
            (data) => {
              this.list();
            });
        }
      }
    });
  }

  confirmMessage(): any {
    return this.dialog.open(AlertMessageComponent, {
      width: 'auto',
      disableClose: true,
      data: {
        title: 'confirm message',
        message: {
          status: false,
        },
        deleteMessage: true,
        submit: {
          status: true,
          title: 'Yes',
        },
        close: {
          status: true,
          title: 'NO',
          class: 'close',
        },
      },
    });
  }

  CustomDialog(action: any, title: any, noneCustom: any, row: any): void {

    if (noneCustom === true) {
      this.eventActions.emit({ action, title, row });
      return;
    }

    if (action === 'edit') {
      title = title + ' ' + this.config?.configure?.title;
    }

    if (action === 'delete') {
      this.delete(row?.id);
      return;
    }

    const dialogRef = this.dialog.open(CustomDialogFormComponent, {
      width: this.config?.form?.width,
      disableClose: true,
      data: {
        title,
        action,
        row,
        config: this.config,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.list();
      }
    });

  }

}
