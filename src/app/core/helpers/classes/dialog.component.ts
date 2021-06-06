import { Component, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'coky-helper-dialog',
  template: `
  <h1 mat-dialog-title>{{data.title}}</h1>
  <div mat-dialog-content>
    <p>{{data.message}}</p>
  </div>
  <div mat-dialog-actions>
    <button mat-button (click)="onCancelClick($event)" class="{{data.cancelButtonClass}}">{{data.cancelButtonText}}</button>
    <button mat-button (click)="onOkClick()" class="{{data.okButtonClass}}" cdkFocusInitial>{{data.okButtonText}}</button>
  </div>

  `
})
export class CokyHelperDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CokyHelperDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CokyDialogData) {

    this.data.cancelButtonText = this.data.cancelButtonText ? this.data.cancelButtonText : "Cancel"
    this.data.okButtonText = this.data.okButtonText ? this.data.okButtonText : "Ok"
  }

  onCancelClick(event: Event): void {
    if (typeof this.data.onCancel == 'function') {
      this.data.onCancel(event)
    }
    this.dialogRef.close();
  }

  onOkClick(): void {
    if (typeof this.data.onOk == 'function') {
      this.data.onOk()
    }
    this.dialogRef.close();
  }

}

export class CokyDialogData {
  title?: string = "Title"
  message?: string = `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
     Quo totam unde consequatur provident recusandae deleniti minima sint aliquam
     fugiat neque veniam aut inventore ad dolorum dolores in, corporis accusantium harum.`
  okButtonText?: string = "OK"
  cancelButtonText?: string = "Cancel"
  okButtonClass?: string = ""
  cancelButtonClass?: string = ""
  onOk?: Function = null
  onCancel?: Function = null
}
