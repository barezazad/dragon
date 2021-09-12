import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '../../@layout/layout.module';
import { sharedModule } from '../../@shared/shared.module';
import { CoreModule } from './../../@core/core.module';
import { MainComponent } from './components/main/main.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [MainComponent, SidenavComponent],
  imports: [CommonModule, HomeRoutingModule, LayoutModule, sharedModule, CoreModule],
})
export class HomeModule { }
