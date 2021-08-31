import { Injectable } from '@angular/core';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private utilService: UtilService) {
  }

  set(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  get(key: string): any {
    return localStorage.getItem(key);
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  setEncryptObject(key: string, value: any): void {
    localStorage.setItem(key, this.utilService.encrypt(JSON.stringify(value)));
  }

  getEncryptObject(key: string): any {
    return JSON.parse(this.utilService.decrypt(localStorage.getItem(key)));
  }

}
