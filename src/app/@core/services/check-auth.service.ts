import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/@core/services/http.service';
import { LocalstorageData } from '../interfaces/localstorageData';
import { environment as env } from './../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CheckAuthService {
  constructor(private httpService: HttpService) { }

  getLocal(): LocalstorageData {
    const operator = JSON.parse(localStorage.getItem(env.localStorageKey) || '{}');
    return {
      userID: operator?.id,
      language: operator?.lang,
      username: operator?.username,
      full_name: operator?.name,
      email: operator?.email,
      roleID: operator.role_id,
      Resources: operator.resources,
    };
  }

  getToken(): string | undefined {
    const operator = JSON.parse(localStorage.getItem(env.localStorageKey) || '{}');
    const token = operator.token;
    if (!operator && !token) {
      this.httpService.logout();
    }
    return token;
  }

  isLoggedIn(): boolean {
    const loggedInUser = JSON.parse(localStorage.getItem(env.localStorageKey) || '{}');
    if (loggedInUser === undefined) {
      this.httpService.logout();
    }

    if (Object.entries(loggedInUser).length !== 0) {
      if (loggedInUser.token) {
        return true;
      }
    }
    return false;
  }

  checkPermission(permission: string): boolean {
    if (this.getLocal().Resources?.includes(permission)) {
      return true;
    } else {
      return false;
    }
  }

}
