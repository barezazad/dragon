import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/@core/modules/material/material.module';
import { PermissionDirective } from './directives/permission.directive';
import { DynamicPipe } from './pipes/dynamic.pipe';
import { SecureImagePipe } from './pipes/secure-image.pipe';

@NgModule({
  declarations: [
    DynamicPipe,
    SecureImagePipe,
    PermissionDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MaterialModule,
    DynamicPipe,
    SecureImagePipe,
    PermissionDirective
  ]
})
export class CoreModule { }
