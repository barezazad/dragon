import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ApiEndPoints } from 'src/app/@core/const';
import { IParams } from 'src/app/@core/interfaces/params';
import { HttpService } from 'src/app/@core/services/http.service';
import { ValidatorService } from '../../../../@core/services/validator.service';
import { RolesList } from '../../models/role.model';
import { Users } from '../../models/user.model';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {

  dataForm!: FormGroup;
  user!: Users;
  roles$!: Observable<RolesList>;
  languages$!: Observable<string[]>;
  statusTypes: string[] = ['active', 'inactive'];
  hide = true;
  validatePassword: any;
  listParams: IParams = {
    page: 0,
    page_size: 1000,
    order_by: 'id',
    direction: 'desc',
    search: '',
    select: '',
    filter: ''
  };

  constructor(
    private httpService: HttpService,
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    public validation: ValidatorService,
    private formBuilder: FormBuilder
  ) {
    this.user = dialogData.data;
  }

  ngOnInit(): void {
    this.getRoles();
    this.getLanguages();
    this.initForm();
  }

  initForm(): void {
    if (this.dialogData.data !== null) {
      this.user = this.dialogData.data;
      this.user.password = '';
      this.validatePassword = null;
    } else {
      // @ts-ignore
      this.user = { id: null, password: '' };
      this.validatePassword = this.validation.password;
    }

    this.dataForm = this.formBuilder.group({
      role_id: [this.user.role_id, Validators.required],
      name: [this.user.username, Validators.required],
      username: [this.user.username, this.validation.username],
      password: [this.user.password, this.validatePassword],
      email: [this.user.email, this.validation.email],
      status: [this.user.status, Validators.required],
      lang: [this.user.lang, Validators.required],
    });
  }

  // submit control create and update selected row in table
  submit(): void {
    switch (this.user.id) {
      // create
      case null: {
        this.create();
        break;
      }
      // update
      default: {
        this.update();
        break;
      }
    }
  }

  // create
  create(): void {
    this.httpService.post(ApiEndPoints.USERS, this.dataForm.value).subscribe(
      (res) => {
        this.dialogRef.close(true);
      });
  }

  // update selected row
  update(): void {
    this.httpService
      .put(ApiEndPoints.USERS, this.dataForm.value, this.user.id)
      .subscribe(
        (res) => {
          this.dialogRef.close(true);
        });
  }

  getRoles(): void {
    this.roles$ = this.httpService.get(ApiEndPoints.ROLES, this.listParams);
  }

  getLanguages(): void {
    this.languages$ = this.httpService.get(ApiEndPoints.LANGUAGES, undefined);
  }
}

