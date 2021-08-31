import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void { }

  confirm(value: string): void {
    switch (value) {
      // @ts-ignore
      case 'yes':
        this.dialogRef.close('yes');
        break;
      // @ts-ignore
      case 'no':
        this.dialogRef.close('no');
        break;
      default:
        this.dialogRef.close('no');
    }
    this.dialogRef.close(value);
  }
}
