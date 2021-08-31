import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  errFileds: any = [];

  name = [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(30),
    Validators.pattern('^[a-zA-Z- _]+$'),
  ];
  nameNotRequire = [
    Validators.minLength(3),
    Validators.maxLength(30),
    Validators.pattern('^[a-zA-Z- _]+$'),
  ];
  email = [
    Validators.required,
    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
  ];
  emailNotRequire = [
    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
  ];
  phone = [
    Validators.required,
    Validators.minLength(10),
    Validators.pattern('^[0-9]+$')
  ];
  phoneNotRequire = [
    Validators.maxLength(20),
    Validators.pattern('^[0-9]+$')
  ];
  username = [
    Validators.required,
    Validators.maxLength(20),
    Validators.pattern('')
  ];
  password = [
    Validators.required,
    Validators.minLength(8),
  ];
  passwordNotRequired = [
    Validators.minLength(8),
  ];
  text = [
    Validators.pattern(''),
    Validators.maxLength(255),
  ];
  number = [
    Validators.pattern('^[0-9]+$')
  ];
  letter = [
    Validators.pattern('^[a-zA-Z\s]+$')
  ];

  setErrorsFiled(InvalidFileds: any[]): void {
    this.errFileds = [];
    for (const el of InvalidFileds) {
      this.errFileds.push({ field: el.field, err: el.message });
    }
  }

  checkFiled(field: string): boolean {
    for (const el of this.errFileds) {
      if (el.field === field) {
        return true;
      }
    }
    return false;
  }

  getErrorMessage(field: string): string {
    for (const el of this.errFileds) {
      if (el.field === field) {
        return el.reason;
      }
    }
    return '';
  }

}
