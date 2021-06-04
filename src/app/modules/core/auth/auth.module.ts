import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AuthGuardService } from './guard.service';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        authScheme: "Bearer",
        allowedDomains: environment.allowedDomains,
        disallowedRoutes: environment.disallowedRoutes,

      }
    })
  ],
  providers: [AuthService, AuthGuardService, JwtHelperService],
})
export class AuthModule { }
