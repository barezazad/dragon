import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { Error404Component } from './error404.component';


@NgModule({
  declarations: [Error404Component],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class Error404Module {
}
