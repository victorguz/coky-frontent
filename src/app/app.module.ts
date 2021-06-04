import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigRoutingModule } from './config/routing.config';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './view/app.component';
import { NotFoundComponent } from './view/default/not-found/not-found.component';
import { ForbiddenComponent } from './view/default/forbidden/forbidden.component';
import { CokyHelperDialogComponent } from './core/helpers';
import { AuthModule } from './modules/core/auth/auth.module';
import { LoginComponent } from './view/login/login.component';
import { LoginHelpComponent } from './view/login-help/login-help.component';
import { TranslatePipe } from './core/pipes/translate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    ForbiddenComponent,
    LoginHelpComponent,
    //helpers
    CokyHelperDialogComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ConfigRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // IonicModule.forRoot(),
    //material
    MatSidenavModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatDialogModule,
    MatSelectModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    // On server
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    //Own modules
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
