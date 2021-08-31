import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidatorService } from './../../../@core/services/validator.service';
@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.scss']
})
export class ErrorHandlingComponent implements OnInit {

  @Input() formGroup!: FormGroup;
  @Input() field: any;
  @Input() message: any;
  @Input() condition: any;

  constructor(
    public validation: ValidatorService
  ) { }

  ngOnInit(): void {
  }

}
