import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dynamicPipe',
})
// @ts-ignore
export class DynamicPipe extends DatePipe implements PipeTransform {
  transform(value: any, type: string): any {
    if (value === ('undefined' || undefined || null)) {
      return null;
    }
    switch (type) {
      case 'datetime':
        return super.transform(value, 'yyyy-MM-dd hh:mm');
      case 'bytes':
        return this.convertByte(value);
      case 'titlecase':
        return value.charAt(0).toUpperCase() + value?.slice(1);
      case 'number':
        return value;
      default:
        return value;
    }
  }

  convertByte(bytes: number, decimals = 2): string {
    if (bytes === 0) {
      return '0 Bytes';
    }

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}

