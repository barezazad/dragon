import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IMessage } from '../interfaces/message';
import { IErrors } from './../const';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public message$: Subject<IMessage> = new Subject<IMessage>();

  constructor() {
  }

  // show normal alert
  show(alert: IMessage): void {
    this.message$.next({ message: alert.message, type: alert.type });
  }

  // filter type of alert base on status
  raise(statusCode: number, message: any): void {
    let ErrMessage;
    if (message !== ('' || null || undefined || 'ok')) {
      ErrMessage = this.titleCase(message);
    }
    switch (statusCode) {
      case 200: {
        this.message$.next({ message: ErrMessage ? ErrMessage : 'Successful', type: 'success' });
        break;
      }
      case 777: {
        this.message$.next({ message: ErrMessage ? ErrMessage : '', type: 'error' });
        break;
      }
      case 999: {
        this.message$.next({ message: ErrMessage ? ErrMessage : '', type: 'warn' });
        break;
      }
      case 888: {
        this.message$.next({ message: ErrMessage ? ErrMessage : '', type: 'info' });
        break;
      }
      case 504: {
        this.message$.next({ message: ErrMessage ? ErrMessage : IErrors.Error504, type: 'error' });
        break;
      }
      case 404: {
        this.message$.next({ message: ErrMessage ? ErrMessage : IErrors.Error404, type: 'error' });
        break;
      }
      case 401: {
        this.message$.next({ message: ErrMessage ? ErrMessage : IErrors.Error401, type: 'error' });
        break;
      }
      case 406: {
        this.message$.next({ message: ErrMessage ? ErrMessage : IErrors.Error406, type: 'error' });
        break;
      }
      case 1: {
        // ignore
        break;
      }
      default: {
        this.message$.next({ message: ErrMessage ? ErrMessage : IErrors.Error0, type: 'error' });
      }
    }
  }

  titleCase(value: any): string {
    value?.slice(0, 120);
    return value?.charAt(0)?.toUpperCase() + value?.slice(1);
  }

}
