import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '../../@layout/layout.module';
import { sharedModule } from '../../@shared/shared.module';
import { MainComponent } from './components/main/main.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, HomeRoutingModule, LayoutModule, sharedModule],
})
export class HomeModule { }
