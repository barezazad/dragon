import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from './../@core/core.module';
import { AlertMessageComponent } from './components/alert-message/alert-message.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { ErrorHandlingComponent } from './components/error-handling/error-handling.component';
import { FileExportComponent } from './components/file-export/file-export.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SpinnerOverlayComponent } from './components/spinner-overlay/spinner-overlay.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { DataTableDirective } from './components/data-table/data-table.directive';

@NgModule({
  declarations: [DataTableComponent, LoadingComponent, TopBarComponent, AlertMessageComponent,
    ConfirmationDialogComponent, FileExportComponent, ErrorHandlingComponent, SpinnerOverlayComponent, DataTableDirective],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule
  ],
  exports: [
    LoadingComponent,
    TopBarComponent,
    DataTableComponent,
    ErrorHandlingComponent
  ]
})

// tslint:disable-next-line:class-name
export class sharedModule { }
