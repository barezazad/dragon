import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { HttpService } from 'src/app/@core/services/http.service';
import { environment as env } from 'src/environments/environment';
import { LoadingService } from '../services/loading.service';
import { MessageService } from '../services/message.service';
import { ValidatorService } from '../services/validator.service';
import { CheckAuthService } from './../services/check-auth.service';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {

  constructor(
    public httpService: HttpService,
    public loadingService: LoadingService,
    public messageService: MessageService,
    public checkAuthService: CheckAuthService,
    public validations: ValidatorService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let request: any;
    if (req.url === `${env.apiUrl}/login`) {
      request = req.clone({ });
    } else {
      request = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.checkAuthService.getToken()}`,
        },
      });
    }

    this.validations.errFileds = [];
    this.loadingService.show();
    return next.handle(request).pipe(
      tap(evt => {
        if (evt instanceof HttpResponse) {
          const requestMethods = ['POST', 'PUT', 'PATCH', 'DELETE'];
          if (evt.status === 200 && requestMethods.includes(request.method)) {
            this.messageService.raise(200, 'ok');
          }
        }
      }
      ),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          if (error.status === 401) {
            this.messageService.raise(error.status, error.error.error);
            this.httpService.logout();
          }
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }

        if (error.error.error?.invalid_params) {
          this.validations.errFileds = error.error.error?.invalid_params;
          this.messageService.raise(error.status, error.error.error?.invalid_params[0]?.reason);
        } else {
          this.messageService.raise(error.status, error.error.error);
        }

        return throwError(errorMessage);
      }),
      finalize(() => {
        this.loadingService.hide();
      })
    );
  }
}
