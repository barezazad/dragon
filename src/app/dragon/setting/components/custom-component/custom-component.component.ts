import { Component, OnInit } from '@angular/core';
import { ICustomComponent } from 'src/app/@core/interfaces/custom-component';
import { ValidatorService } from './../../../../@core/services/validator.service';

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.scss']
})
export class CustomComponentComponent implements OnInit {

  constructor(private validator: ValidatorService) { }

  StatusOptions = [
    { id: 'active', name: 'Active' },
    { id: 'inactive', name: 'Inactive' }
  ];

  data: ICustomComponent = {
    configure: {
      title: 'user',
      endPoint: 'users',
      orderBy: 'id',
      directionBy: 'desc',
    },
    topBar: {
      addButton: {
        action: 'create',
        name: 'create user',
        permission: 'user:write',
        icon: 'add_circle'
      },
      search: {
        status: true
      },
      export: {
        permission: 'user:excel',
        excelEndPoint: 'excel/user'
      }
    },
    columns: [
      { columnDef: 'id', header: 'ID', type: '', cell: (el: any) => `${el.id}` },
      { columnDef: 'name', header: 'Name', type: 'titlecase', cell: (el: any) => `${el.name}` },
      { columnDef: 'username', header: 'Username', type: '', cell: (el: any) => `${el.username}` },
      { columnDef: 'lang', header: 'Language', type: '', cell: (el: any) => `${el.lang}` },
      { columnDef: 'role', header: 'Role', type: '', cell: (el: any) => `${el.role}` },
      { columnDef: 'email', header: 'Email', type: '', cell: (el: any) => `${el.email}` },
      {
        columnDef: 'action', header: 'Action', type: '', cell: (el: any) => ``,
        actions: [
          { action: 'edit', name: 'edit', icon: 'edit', class: 'mat-edit', permission: 'user:write', actionId: (el: any) => `${el.id}`, },
          { action: 'delete', name: 'delete', icon: 'delete', class: 'mat-delete', permission: 'user:write', actionId: (el: any) => `${el.id}`, },
        ]
      },
    ],

    // lang: [this.user.lang, Validators.required],

    form: {
      width: '565px',
      fields: [
        { category: 'text', type: 'text', name: 'name', label: 'name', validation: this.validator.name, width: 500 },
        { category: 'text', type: 'text', name: 'username', label: 'username', validation: this.validator.username, width: 500 },
        {
          category: 'password', type: 'password', name: 'password', label: 'password', validation: this.validator.password, width: 500,
          validationAction: 'create',
        },
        {
          category: 'dropDown', type: '', name: 'role_id', label: 'role', validation: this.validator.required, width: 500,
          options: {
            endpoint: 'roles',
            optionName: 'name',
            optionValue: 'id',
          }
        },
        { category: 'text', type: 'text', name: 'email', label: 'email', icon: 'email', validation: this.validator.email, width: 500 },
        {
          category: 'dropDown', type: '', name: 'status', label: 'status', validation: this.validator.required, width: 500,
          defaultValue: 'active',
          options: {
            optionName: 'name',
            optionValue: 'id',
            source: this.StatusOptions,
          }
        },
        { category: 'text', type: 'text', name: 'lang', label: 'language', hide: true, defaultValue: 'en', width: 500 },
      ],
    }
  };


  ngOnInit(): void {

  }
}
