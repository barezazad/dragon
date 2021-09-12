import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { CheckAuthService } from 'src/app/@core/services/check-auth.service';
import { HttpService } from 'src/app/@core/services/http.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;

  permission: any = [];
  operatorName: any;

  // tslint:disable-next-line:variable-name
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private service: TranslocoService,
    private httpService: HttpService,
    private checkAuthService: CheckAuthService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    //
    this.operatorName = checkAuthService.getLocal().full_name;
    this.permission = checkAuthService.getLocal().Resources;
  }

  ngOnInit(): void {
  }

  changeLang(lang: string): void {
    this.service.setActiveLang(lang);
  }

  logout(): void {
    this.httpService.logout();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
