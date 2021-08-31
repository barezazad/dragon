import { Injectable } from '@angular/core';
// @ts-ignore
import { AES } from 'crypto-js';
import { environment as env } from './../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() {
  }

  encrypt(data: string, key: string = env.encryptKey): string {
    return AES.encrypt(data, key).toString();
  }

  decrypt(data: string | null, key: string = env.encryptKey): string {
    return AES.decrypt(data, key).toString();
  }

  randomNumber(digit: number = 60000): number {
    return Math.floor(100000 + Math.random() * digit);
  }

}
