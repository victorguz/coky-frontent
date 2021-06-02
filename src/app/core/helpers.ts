import { Component, Inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { APP_TITLE } from '../config/default.config';
import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root',
})
export class Helpers {

  constructor(private router: Router,
    private _snackBar: MatSnackBar,
    public _dialog: MatDialog) { }

  public getTitle(subTitle: string = "") {
    subTitle = subTitle.trim();
    if (subTitle.length > 0) {
      return `${subTitle} | ${APP_TITLE}`
    } else {
      return `${APP_TITLE}`
    }
  }

  /**
 * Pone en mayusculas la inicial de cada palabra y en minusculas el resto de las letras en una cadena.
 * @param cad
 * @param split
 */
  public capitalize(cad: string, split: string = " ") {
    let arr = cad.toLocaleLowerCase().split(split);
    cad = "";
    arr.forEach(e => {
      cad += e[0].toUpperCase() + e.substring(1) + " ";
    });
    return cad;
  }

  /**
   * Verifica si la cadena hace match con el regex
   * @param cadena
   * @param regex
   */
  public static checkRegex(cadena: string, regex: RegExp) {
    return cadena.match(regex)
  }

  /**
   * Open a snakbar type with the message and function
   * @param type
   * @param message
   * @param actionText
   * @param time
   * @param func
   */
  public showMessage(type: HelpersMessageType = HelpersMessageType.DANGER, message: string, actionText: string = "OK", time = 2000, func = undefined) {
    let _class = ""
    switch (type) {
      case HelpersMessageType.WHITE:
        _class = "whiteSnackbar"
        break;
      case HelpersMessageType.DARK:
        _class = "darkSnackbar"
        break;
      case HelpersMessageType.PRIMARY:
        _class = "primarySnackbar"
        break;
      case HelpersMessageType.SECONDARY:
        _class = "secondarySnackbar"
        break;
      case HelpersMessageType.GRAY:
        _class = "graySnackbar"
        break;
      case HelpersMessageType.SUCCESS:
        _class = "successSnackbar"
        break;
      case HelpersMessageType.ALERT:
        _class = "alertSnackbar"
        break;
      case HelpersMessageType.DANGER:
        _class = "dangerSnackbar"
        break;
      case HelpersMessageType.INFO:
        _class = "infoSnackbar"
        break;
    }

    const snackBarRef = this._snackBar.open(message, actionText, {
      duration: time,
      horizontalPosition: "end",
      verticalPosition: "top",
      panelClass: _class
    });

    if (func != undefined && typeof func == "function") {
      snackBarRef.onAction().subscribe(func())
    }
  }

  /**
   * Shows a default success message
   * @param message
   * @param action
   * @param func
   */
  public successMessage(message: string, action: string = "OK", func = undefined) {
    this.showMessage(HelpersMessageType.SUCCESS, message, action, 5000, func)
  }
  public errorMessage(message: string, action: string = "OK", func = undefined) {
    this.showMessage(HelpersMessageType.DANGER, message, action, 5000, func)
  }
  public alertMessage(message: string, action: string = "OK", func = undefined) {
    this.showMessage(HelpersMessageType.ALERT, message, action, 5000, func)
  }
  public infoMessage(message: string, action: string = "OK", func = undefined) {
    this.showMessage(HelpersMessageType.INFO, message, action, 5000, func)
  }

  /**
   * Shows a modal dialog
   * @param options
   */
  showDialog(options: CokyDialogData = new CokyDialogData()): void {

    const dialogRef = this._dialog.open(CokyHelperDialogComponent, {
      data: options
    });
  }

  static async encode(cad: string): Promise<string> {
    return bcrypt.hashSync(cad, 15);
  }

  async compareEncoded(notEncrypted, encrypted): Promise<boolean> {
    return await bcrypt.compareSync(notEncrypted, encrypted)
  }
}


export enum HelpersMessageType {
  PRIMARY, SECONDARY, SUCCESS, DANGER, ALERT, INFO, DARK, WHITE, GRAY
}

@Component({
  selector: 'coky-helper-dialog',
  template: `
  <h1 mat-dialog-title>{{data.title}}</h1>
  <div mat-dialog-content>
    <p>{{data.message}}</p>
  </div>
  <div mat-dialog-actions>
    <button mat-button (click)="onCancelClick($event)" class="{{data.cancelButtonClass}}">{{data.cancelButtonText}}</button>
    <button mat-button [mat-dialog-close]="onOkClick()" class="{{data.okButtonClass}}" cdkFocusInitial>{{data.okButtonText}}</button>
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
