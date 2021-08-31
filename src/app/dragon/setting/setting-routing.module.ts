import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingTabComponent } from './components/setting-tab/setting-tab.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { SettingComponent } from './setting.component';

const routes: Routes = [
  {
    path: '',
    component: SettingComponent,
    children: [
      {
        path: '',
        component: SettingTabComponent,
        children: [
          {
            path: '',
            redirectTo: 'users',
          },
          {
            path: 'users',
            component: UserListComponent,
          },
          // {
          //   path: 'roles',
          //   component: RolesComponent,
          // },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
