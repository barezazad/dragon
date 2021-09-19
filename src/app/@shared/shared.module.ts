import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from './../@core/core.module';
import { AlertMessageComponent } from './components/alert-message/alert-message.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { CheckboxComponent } from './components/custom-dialog-form/checkbox/checkbox.component';
import { CustomDialogFormComponent } from './components/custom-dialog-form/custom-dialog-form.component';
import { DatePickerComponent } from './components/custom-dialog-form/date-picker/date-picker.component';
import { DropDownComponent } from './components/custom-dialog-form/drop-down/drop-down.component';
import { PasswordComponent } from './components/custom-dialog-form/password/password.component';
import { RadioButtonComponent } from './components/custom-dialog-form/radio-button/radio-button.component';
import { TextAreaComponent } from './components/custom-dialog-form/text-area/text-area.component';
import { TextComponent } from './components/custom-dialog-form/text/text.component';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DataTableDirective } from './components/data-table/data-table.directive';
import { ErrorHandlingComponent } from './components/error-handling/error-handling.component';
import { FileExportComponent } from './components/file-export/file-export.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SpinnerOverlayComponent } from './components/spinner-overlay/spinner-overlay.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';

@NgModule({
  declarations: [
    DataTableComponent,
    LoadingComponent,
    TopBarComponent,
    AlertMessageComponent,
    ConfirmationDialogComponent,
    FileExportComponent,
    ErrorHandlingComponent,
    SpinnerOverlayComponent,
    DataTableDirective,
    CustomTableComponent,
    CustomDialogFormComponent,
    CheckboxComponent,
    RadioButtonComponent,
    DropDownComponent,
    DatePickerComponent,
    TextAreaComponent,
    TextComponent,
    PasswordComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule
  ],
  exports: [
    LoadingComponent,
    TopBarComponent,
    DataTableComponent,
    ErrorHandlingComponent,
    CustomTableComponent,
  ]
})

// tslint:disable-next-line:class-name
export class sharedModule { }
