import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData{
  title:string
}

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css']
})
export class FormDialogComponent {
  constructor(public dialogRef: MatDialogRef<FormDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData, ){}
}
