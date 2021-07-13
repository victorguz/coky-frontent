import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './view/app.component';
import { NotFoundComponent } from './view/default/not-found/not-found.component';
import { ForbiddenComponent } from './view/default/forbidden/forbidden.component';
import { GlobalModule } from './modules/shared/global/global.module';
import { AdminModule } from './modules/core/admin/admin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule, tokenGetter } from './modules/core/auth/auth.module';
import { TranslatePipe } from './core/pipes/translate.pipe';
import { PhrasecasePipe } from './core/pipes/phrasecase.pipe';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ForbiddenComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // IonicModule.forRoot(),
    //Own modules
    AdminModule,
    GlobalModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        authScheme: "Bearer",
        allowedDomains: environment.allowedDomains,
        disallowedRoutes: environment.disallowedRoutes,

      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [GlobalModule],
})
export class AppModule { }
