import { Component, Input, OnInit } from '@angular/core';
import { IFields } from '../../../../@core/interfaces/custom-component';
import { ValidatorService } from '../../../../@core/services/validator.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  hide = true;
  @Input() data!: IFields;
  @Input() fieldForm: any;
  @Input() action: any;
  @Input() group: any;

  constructor(public validator: ValidatorService) { }

  ngOnInit(): void {
  }
}
