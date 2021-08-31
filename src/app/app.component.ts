import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { MessageService } from './@core/services/message.service';
import { ThemeService } from './@core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private messageService: MessageService,
    private snackBar: MatSnackBar,
    private themes: ThemeService,
    public matIconRegistry: MatIconRegistry,
    public domSanitizer: DomSanitizer,
  ) {
    // get saved theme from localStorage
    const StorageTheme = localStorage.getItem('theme');
    this.themes.addTheme(StorageTheme);

    // init svg icons
    this.initSvgIcons();

    this.messageService.message$.subscribe(
      (m) => {
        this.snackBar.open(m.message, '🆇', {
          duration: environment.snackBarDuration,
          verticalPosition: 'top',
          horizontalPosition: 'end',
          panelClass: [m.type],
        });
      }
    );
  }

  // definitions to svg icons
  initSvgIcons(): void {
    this.matIconRegistry.addSvgIcon('logout',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/img/logout.svg'));
    this.matIconRegistry.addSvgIcon('excel',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/img/excel.svg'));
  }

}
