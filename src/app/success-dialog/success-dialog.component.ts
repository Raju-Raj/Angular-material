import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  title:string,
  message:string
}

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.css']
})
export class SuccessDialogComponent {

  constructor(public dialogRef:MatDialogRef<SuccessDialogComponent>, @Inject(MAT_DIALOG_DATA)  public data:DialogData ){}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
