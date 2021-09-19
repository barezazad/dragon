import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICustomComponent, IFields } from 'src/app/@core/interfaces/custom-component';
import { CheckAuthService } from './../../../@core/services/check-auth.service';
import { HttpService } from './../../../@core/services/http.service';

@Component({
  selector: 'app-custom-dialog-form',
  templateUrl: './custom-dialog-form.component.html',
  styleUrls: ['./custom-dialog-form.component.scss'],
})
export class CustomDialogFormComponent implements OnInit {

  dataForm!: FormGroup;
  form = {};
  configs!: ICustomComponent;
  fields!: IFields[];
  endPoint: any;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CustomDialogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpService: HttpService,
    public auth: CheckAuthService,
  ) { }

  ngOnInit(): void {
    this.configs = this.data?.config;
    // fields
    if (this.configs.form?.fields) {
      this.fields = this.configs.form?.fields;
    }
    // endpoint
    if (this.configs.configure?.endPoint) {
      this.endPoint = this.configs.configure?.endPoint;
    }
    // init dropdown
    this.dropdown(this.data?.config);
    // init form
    this.initForm(this.data?.action);

    // set form value
    if (this.data?.row) {
      this.formSetValues(this.data?.row);
    }
  }

  initForm(action: any): void {
    this.form = this.generateForm(action, this.form, this.fields);

    this.dataForm = this.formBuilder.group({
      ...this.form,
    });

  }

  generateForm(action: any, form: any, fields: IFields[]): any {
    for (const el of fields) {

      // check to ignore element in form
      if (el.ignoreIn === action) {
        continue;
      }

      // set validation per action
      let validations: any;
      if (el.validationAction === undefined) {
        validations = el?.validation;
      } else if (el.validationAction === action) {
        validations = el?.validation;
      }

      // Require fields
      if (action === 'create') {
        form[el.name] = [el.defaultValue, validations];
      } else {
        form[el.name] = [el.value, validations];
      }
    }

    return form;
  }

  formSetValues(data: any): void {
    for (const el of this.fields) {
      el.value = data[el.name];
    }
    this.initForm('edit');
  }

  dropdown(configs: ICustomComponent): void {
    const fields = configs?.form?.fields;
    if (fields) {
      for (const el of fields) {
        if (el?.options?.endpoint) {
          this.httpService.get(`all/${el.options.endpoint}`, undefined).subscribe(
            (res) => {
              if (el.options) {
                el.options.source = res;
              }
            });
        }
      }
    }
  }


  close(status: boolean): void {
    this.dialogRef.close(status);
  }

  submit(): void {
    for (const el of this.fields) {
      if (el.category === 'checkbox' || el.category === 'radioBtn' || el.category === 'datePicker') {
        this.dataForm.value[el.name] = el.value;
      }
    }

    switch (this.data?.row) {
      // create
      case null: {
        this.httpService.post(this.endPoint, this.dataForm.value).subscribe(
          (res) => {
            this.close(true);
            this.dataForm.reset();
          });
        break;
      }
      // update
      default: {
        this.httpService.put(this.endPoint, this.dataForm.value, this.data?.row?.id).subscribe(
          (res) => {
            this.close(true);
            this.dataForm.reset();
          });
        break;
      }
    }
  }
}
