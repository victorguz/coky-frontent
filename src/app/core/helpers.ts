import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Helpers {

  public static app_title = 'Coky Framework';

  constructor(private router: Router,
    private _snackBar: MatSnackBar) { }

  public getTitle(subTitle: string = "") {
    subTitle = subTitle.trim();
    if (subTitle.length > 0) {
      return `${subTitle} | ${Helpers.app_title}`
    } else {
      return `${Helpers.app_title}`
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

  public showMessage(type: HelpersMessageType = HelpersMessageType.DANGER, message: string, textAction: string = "OK", time = 2000, func = undefined) {
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

    const snackBarRef = this._snackBar.open(message, textAction, {
      duration: time,
      horizontalPosition: "end",
      verticalPosition: "top",
      panelClass: _class
    });

    if (func != undefined && typeof func == "function") {
      snackBarRef.onAction().subscribe(func())
    }
  }


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
}


export enum HelpersMessageType {
  PRIMARY, SECONDARY, SUCCESS, DANGER, ALERT, INFO, DARK, WHITE, GRAY
}
