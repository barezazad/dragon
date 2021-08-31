import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../../@core/core.module';
import { sharedModule } from '../../@shared/shared.module';
import { SettingTabComponent } from './components/setting-tab/setting-tab.component';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';



@NgModule({
  declarations: [SettingComponent, UserListComponent, UserDialogComponent, SettingTabComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,
    sharedModule,
    CoreModule
  ]
})
export class SettingModule { }
