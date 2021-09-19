import { Component, Input, OnInit } from '@angular/core';
import { IFields } from './../../../../@core/interfaces/custom-component';
import { ValidatorService } from './../../../../@core/services/validator.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  @Input() data!: IFields;
  @Input() fieldForm: any;
  @Input() action: any;
  @Input() group: any;

  constructor(public validator: ValidatorService) { }

  ngOnInit(): void {
  }
}
