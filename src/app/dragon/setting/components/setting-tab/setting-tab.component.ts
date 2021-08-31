import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment as env } from './../../../../../environments/environment.prod';

@Component({
  selector: 'app-setting-tab',
  templateUrl: './setting-tab.component.html',
  styleUrls: ['./setting-tab.component.scss']
})
export class SettingTabComponent implements OnInit {

  routes: any[] = [];
  permissions: any = [];
  lStorage = JSON.parse(localStorage.getItem(env.localStorageKey) || '{}');

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    this.permissions = this.lStorage.resources;
    this.addTabs();
  }

  addTabs(): void {
    this.routes.push({ path: 'users', name: 'Users', symbol: 'account_circle', permission: 'user:write' });
    this.routes.push({ path: 'roles', name: 'Roles', symbol: 'verified_user', permission: 'role:write' });
  }
}
