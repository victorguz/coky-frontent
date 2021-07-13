import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PhrasecasePipe } from '../../../core/pipes/phrasecase.pipe';
import { TranslatePipe } from '../../../core/pipes/translate.pipe';
import { CokyHelperDialogComponent } from 'src/app/core/helpers/classes/dialog.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    //pipes
    TranslatePipe,
    PhrasecasePipe,
    //helpers
    CokyHelperDialogComponent,
  ],
  imports: [
    //basics
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //Own
    MaterialModule,
  ],
  exports: [
    //basics
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //pipes
    TranslatePipe,
    PhrasecasePipe,
    //helpers
    CokyHelperDialogComponent,
    //Own
    MaterialModule,
  ]
})
export class GlobalModule { }
