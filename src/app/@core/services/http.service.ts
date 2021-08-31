import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment as env } from '../../../environments/environment';
import { ApiEndPoints } from '../const';
import { IParams } from './../interfaces/params';
import { MessageService } from './message.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  lastParams: any;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private storageService: StorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(param => {
      this.lastParams = param;
    });
  }

  list(url: string, param: IParams, appendParam: boolean): Observable<any> {
    const params = this.getParams(param);
    if (appendParam === true) {
      this.appendParams(params);
    }
    return (
      this.http
        .get<any>(`${env.apiUrl}/${url}`, { params })
        .pipe(map((res: any) => res.data))
    );
  }

  get(url: string, param: IParams | undefined): Observable<any> {

    let params;
    if (param) {
      params = this.getParams(param);
    }
    return (
      this.http
        .get<any>(`${env.apiUrl}/${url}`, { params })
        .pipe(map((res: any) => res.data))
    );
  }

  getByID(url: string, id: any): Observable<any> {
    return this.http.get<any>(`${env.apiUrl}/${url}/${id}`)
      .pipe(map((res: any) => res.data),
        catchError((err) => this.handleError(err)));
  }

  put(url: string, data: any, id: any | null): Observable<any> {
    return this.http.put<any>(`${env.apiUrl}/${url}/${id}`, data)
      .pipe(
        catchError((err) => this.handleError(err)));
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post<any>(`${env.apiUrl}/${url}`, data)
      .pipe(
        catchError((err) => this.handleError(err)));
  }

  delete(url: string, id: any): Observable<any> {
    return this.http.delete<any>(`${env.apiUrl}/${url}/${id}`)
      .pipe(
        catchError((err) => this.handleError(err)));
  }

  handleError(error: any): any {
    return throwError('Error!!:something went wrong!');
  }

  getParams(param: IParams): any {
    const params: any = {
      page: param.page,
      page_size: param.page_size
    };

    if (param.search) {
      params.search = param.search;
    }

    if (param.direction) {
      params.order_by = param.order_by,
        params.direction = (param.direction === 'desc' ? 'desc' : 'asc');
    }
    if (param.filter) {
      params.filter = param.filter;
    }
    if (param.select) {
      params.select = param.select;
    }
    return params;
  }

  appendParams(params: any): void {
    if ((JSON.stringify(this.lastParams) !== JSON.stringify(params))) {
      if (params.page !== '0') {
        this.router.navigate([], {
          queryParams: params,
          queryParamsHandling: 'merge',
        });
      }
    }
  }

  logout(): void {
    this.storageService.remove(env.localStorageKey);
    this.router.navigate(['login']).then();
    this.messageService.raise(200, 'You are successfully logged out');
    // window.location.reload();
  }

  resetPassword(payload: any, token: any): any {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      })
    };
    return this.http.post<any>(`${env.apiUrl}/${ApiEndPoints.RESETPASSWORD}`, payload, httpOptions);
  }

}
