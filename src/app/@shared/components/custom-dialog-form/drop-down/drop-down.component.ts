import { Component, Input, OnInit } from '@angular/core';
import { IFields } from 'src/app/@core/interfaces/custom-component';
import { ValidatorService } from 'src/app/@core/services/validator.service';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  @Input() data!: IFields;
  @Input() fieldForm: any;
  @Input() group: any;
  @Input() action: any;
  optionValue: any;
  optionName: any;


  constructor(public validator: ValidatorService) { }

  ngOnInit(): void {
    if (this.data) {
      this.optionName = this.data?.options?.optionName;
      this.optionValue = this.data?.options?.optionValue;
    }
  }

}
