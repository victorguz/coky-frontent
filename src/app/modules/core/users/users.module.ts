import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../auth/components/login/login.component';
import { CokyHelperDialogComponent } from 'src/app/core/helpers/classes/dialog.component';
import { UsersRoutingModule } from './users.routing.module';
import { GlobalModule } from '../../shared/global/global.module';
import { LoginHelpComponent } from '../auth/components/login-help/login-help.component';
import { RegisterComponent } from '../auth/components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    //components
  ],
  imports: [
    //basics
    CommonModule,
    //routing
    UsersRoutingModule,
    //others
    GlobalModule,
  ]
})

export class UsersModule { }
