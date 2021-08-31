import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from './../@core/core.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ThemePickerComponent],
  imports: [CommonModule, RouterModule, CoreModule],
  exports: [HeaderComponent, FooterComponent],
})
export class LayoutModule {
}
