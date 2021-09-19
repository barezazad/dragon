import { Component, Input, OnInit } from '@angular/core';
import { IFields } from 'src/app/@core/interfaces/custom-component';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {

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
  setValue(element: any, value: any): void {
    for (const el of this.fieldForm) {
      if (el.name === element) {
        el.value = value;
      }
    }
  }

}
