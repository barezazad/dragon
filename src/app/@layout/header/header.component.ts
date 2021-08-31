import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { CheckAuthService } from 'src/app/@core/services/check-auth.service';
import { HttpService } from 'src/app/@core/services/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  permission: any = [];
  operatorName: any;

  constructor(
    private service: TranslocoService,
    private httpService: HttpService,
    private checkAuthService: CheckAuthService
  ) {
    this.operatorName = checkAuthService.getLocal().full_name;
    this.permission = checkAuthService.getLocal().Resources;
  }

  ngOnInit(): void { }

  changeLang(lang: string): void {
    this.service.setActiveLang(lang);
  }

  logout(): void {
    this.httpService.logout();
  }
}
