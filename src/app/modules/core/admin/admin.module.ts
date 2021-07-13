import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PhrasecasePipe } from '../../../core/pipes/phrasecase.pipe';
import { TranslatePipe } from '../../../core/pipes/translate.pipe';
import { AdminRoutingModule } from './admin-routing.module';
import { GlobalModule } from '../../shared/global/global.module';
import { UsersModule } from '../users/users.module';
import { AuthModule } from '../auth/auth.module';
import { CokyHelperDialogComponent } from 'src/app/core/helpers/classes/dialog.component';
import { MaterialModule } from '../../shared/material/material.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,

    //App modules
    UsersModule,
    AuthModule
  ],
  exports: [
    //App modules
    UsersModule,
    AuthModule
  ]
})
export class AdminModule { }
