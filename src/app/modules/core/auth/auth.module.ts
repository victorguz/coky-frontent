import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/guard.service';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { AuthRoutingModule } from './auth.routing.module';
import { GlobalModule } from '../../shared/global/global.module';
import { LoginComponent } from './components/login/login.component';
import { LoginHelpComponent } from './components/login-help/login-help.component';
import { RegisterComponent } from './components/register/register.component';
import { PhrasecasePipe } from 'src/app/core/pipes/phrasecase.pipe';
import { TranslatePipe } from 'src/app/core/pipes/translate.pipe';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    LoginComponent,
    LoginHelpComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    GlobalModule,

  ],
  providers: [AuthService, AuthGuardService, JwtHelperService],
})
export class AuthModule { }
