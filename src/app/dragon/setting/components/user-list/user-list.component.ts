import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiEndPoints } from 'src/app/@core/const';
import { TopBar } from 'src/app/@core/interfaces/topbar';
import { CheckAuthService } from 'src/app/@core/services/check-auth.service';
import { HttpService } from 'src/app/@core/services/http.service';
import { MessageService } from 'src/app/@core/services/message.service';
import { environment as env } from '../../../../../environments/environment';
import { IActionEvent } from '../../../../@core/interfaces/actionevent';
import { IParams } from '../../../../@core/interfaces/params';
import { AlertMessageComponent } from '../../../../@shared/components/alert-message/alert-message.component';
import { Users, UsersList } from '../../models/user.model';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { columns } from './table';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$!: Observable<UsersList>;
  user$!: Observable<Users>;
  columns: any;
  pageSize: number;
  page: number;
  direction: string;
  orderBy: string;
  listParams: IParams;

  // topBar
  topBar: TopBar = {
    addButton: {
      status: true,
      action: 'create',
      name: 'add user',
      permission: 'user:write',
      icon: 'add_circle'
    },
    search: {
      status: true,
      filter: {
        status: false,
        content: '',
        height: '60',
        shareData: '',
      }
    },
    export: {
      status: false,
      permission: 'user:write',
      excelEndPoint: `excel/users`,
    }
  };

  constructor(
    public dialog: MatDialog,
    private httpService: HttpService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private checkAuthService: CheckAuthService
  ) {
    this.pageSize = env.perPageOptions[0];
    this.page = 0;
    this.direction = 'desc';
    this.orderBy = 'id';
    this.listParams = {
      page_size: this.pageSize,
      page: this.page,
      order_by: this.orderBy,
      direction: this.direction,
      search: '',
      select: '',
      filter: '',
    };

    this.activatedRoute.queryParams.subscribe(params => {
      Object.assign(this.listParams, params);
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.columns = columns;
    // because we redirect from setting-routing to this component we check permission then call for list api,optional
    if (this.checkAuthService.checkPermission('user:write')) {
      this.list();
    }
  }

  listParam(event: any): void {
    let param: IParams;
    param = event.params;
    this.listParams = {
      page_size: param.page_size,
      page: param.page,
      search: param.search,
      order_by: param.order_by,
      direction: param.direction,
      select: '',
      filter: ''
    };
    this.list();
  }

  list(): void {
    this.users$ = this.httpService.list(ApiEndPoints.USERS, this.listParams, true); // last argument for append params in url
  }

  getById(id: number, action: string): void {
    this.httpService.getByID(ApiEndPoints.USERS, id).subscribe(
      (res) => {
        this.user$ = res;
        this.manageActions(id, action);
      });
  }

  eventActions(event: IActionEvent): void {
    const action = event.action;
    const id = event.row.id;
    if (id !== 0 && id) {
      this.getById(id, action);
    } else {
      this.manageActions(id, action);
    }
  }

  manageActions(id: number, action: string): void {
    switch (action) {
      case 'delete':
        this.delete(id);
        break;
      case 'edit':
        this.manageDialog('edit user');
        break;
      case 'create':
        this.user$ = null as any;
        this.manageDialog('create user');
        break;
      default:
        break;
    }
  }


  delete(id: number): void {
    const dialogConfirm = this.confirmMessage();
    dialogConfirm.afterClosed().subscribe((res: any) => {

      if (res === true) {
        this.httpService.delete(ApiEndPoints.USERS, id).subscribe(
          (data) => {
            this.list();
          });
      }
    });
  }

  manageDialog(title: string): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: 'auto',
      disableClose: true,
      data: {
        title,
        data: this.user$,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.list();
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
}
