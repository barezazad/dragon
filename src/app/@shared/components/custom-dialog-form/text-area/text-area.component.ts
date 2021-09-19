import { Component, Input, OnInit } from '@angular/core';
import { IFields } from 'src/app/@core/interfaces/custom-component';
import { ValidatorService } from 'src/app/@core/services/validator.service';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {

  @Input() data!: IFields;
  @Input() fieldForm: any;
  @Input() group: any;
  @Input() action: any;

  constructor(public validator: ValidatorService) { }

  ngOnInit(): void { }
}
