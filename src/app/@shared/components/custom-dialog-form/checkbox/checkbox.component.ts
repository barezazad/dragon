import { Component, Input, OnInit } from '@angular/core';
import { IFields } from './../../../../@core/interfaces/custom-component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  @Input() data!: IFields;
  @Input() fieldForm: any;
  @Input() action: any;
  optionValue: any;
  optionName: any;

  constructor() { }

  ngOnInit(): void {
    if (this.data) {
      this.optionName = this.data?.options?.optionName;
      this.optionValue = this.data?.options?.optionValue;
    }
  }

  CheckList(event: any, field: any): void {
    for (const el of this.fieldForm) {
      if (el.name === field) {
        if (event.checked === true) {
          if (!el.value.includes(event.source.value)) {
            el.value.push(event.source.value);
          }
        } else {
          const list = el.value;
          el.value = [];
          // tslint:disable-next-line:prefer-for-of
          for (let i = 0; i < list.length; i++) {
            if (list[i] === event.source.value) {
              continue;
            }
            el.value.push(list[i]);
          }
        }
      }
    }
  }
}
