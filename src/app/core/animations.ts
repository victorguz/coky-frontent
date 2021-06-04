import { Component, Inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { APP_TITLE } from '../config/default.config';
import * as bcrypt from 'bcryptjs';
import { Title } from '@angular/platform-browser';
import { animate, style, transition, trigger } from '@angular/animations';

export class Animations {

  static hidenHeightAnimation() {
    return trigger(
      'hidenHeightAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0 }),
            animate('0.2s ease-out',
              style({ height: "fit-content" }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ height: "fit-content" }),
            animate('0.2s ease-in',
              style({ height: 0 }))
          ]
        )
      ]
    )
  }
}
