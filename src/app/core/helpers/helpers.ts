import {  Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import * as bcrypt from 'bcryptjs';
import { Title } from '@angular/platform-browser';
import { CokyDialogData, CokyHelperDialogComponent } from './classes/dialog.component';
import { getConfig } from 'src/app/config/default.config';

@Injectable({
  providedIn: 'root',
})
export class Helpers {

  constructor(private router: Router,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog,
    private _title: Title) { }

  public setTitle(subTitle: string = "", stringCase: StringCaseType = StringCaseType.TITLECASE) {
    subTitle = subTitle.trim();
    if (subTitle.length > 0) {
      this._title.setTitle(Helpers.toStringCase(`${subTitle} | ${getConfig("app_title")}`, stringCase))
    } else {
      this._title.setTitle(Helpers.toStringCase(`${getConfig("app_title")}`, stringCase))
    }
  }

  public getTitle() {
    return this._title.getTitle()
  }
  /**
   * Pone mayusculas o minusculas en un string usando como
   * selector un parámetro único de la enumeración StringCaseType
   * @param cadena
   * @param stringCase
   * @returns
   */
  public static toStringCase(cadena: string, stringCase: StringCaseType): string {
    switch (stringCase) {
      case StringCaseType.TITLECASE: return Helpers.toTitleCase(cadena)
      case StringCaseType.PHRASECASE: return Helpers.toPhraseCase(cadena)
      case StringCaseType.LOWERCASE: return cadena.toLowerCase()
      case StringCaseType.UPPERCASE: return cadena.toUpperCase()
    }
  }

  /**
   * Pone en mayusculas la inicial de cada palabra y en minusculas el resto de las letras en una cadena.
   * @param cad
   * @param split
   */
  public static toTitleCase(cad: string, split: string = " ") {
    cad = cad.trim()
    if (cad.length > 0) {
      let arr = cad.toLocaleLowerCase().split(split);
      cad = "";
      arr.forEach(e => {
        cad += e[0].toUpperCase() + e.substring(1) + " ";
      });
    }
    return cad;
  }

  /**
  * Pone en mayusculas la inicial de cada frase separandola por puntos (.)
  * @param cad
  */
  public static toPhraseCase(cad: string) {
    return this.toTitleCase(cad, ".");
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

export enum StringCaseType {
  LOWERCASE, UPPERCASE, PHRASECASE, TITLECASE
}
