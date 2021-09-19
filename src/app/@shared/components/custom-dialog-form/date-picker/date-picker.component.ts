import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IFields } from 'src/app/@core/interfaces/custom-component';
import { ValidatorService } from 'src/app/@core/services/validator.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  pipe = new DatePipe('en_Us');

  @Input() data!: IFields;
  @Input() fieldForm: any;
  @Input() group: any;
  @Input() action: any;

  constructor(public validator: ValidatorService) { }

  ngOnInit(): void { }


}
