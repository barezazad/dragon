import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiEndPoints } from 'src/app/@core/const';
import { CheckAuthService } from 'src/app/@core/services/check-auth.service';
import { HttpService } from 'src/app/@core/services/http.service';
import { MessageService } from 'src/app/@core/services/message.service';
import { environment as env } from './../../../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // @ts-ignore
  loginForm: FormGroup;
  hide = true;

  constructor(
    public fb: FormBuilder,
    public httpService: HttpService,
    public checkAuthService: CheckAuthService,
    public compDialog: MatDialog,
    public router: Router,
    public messageService: MessageService,
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    if (this.checkAuthService.isLoggedIn()) {
      this.redirectMainPage();
    }
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.maxLength(30)]],
    });
  }

  doLogin(): void {
    this.httpService
      .post(ApiEndPoints.LOGIN, this.loginForm.value)
      .subscribe((res: any) => {
        this.messageService.raise(200, 'Logged in successfully');
        localStorage.setItem(env.localStorageKey, JSON.stringify(res.data));
        this.redirectMainPage();
      });
  }

  redirectMainPage(): void {
    this.router.navigate(['/']).then();
  }

}
