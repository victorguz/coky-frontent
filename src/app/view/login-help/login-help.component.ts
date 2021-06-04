import { Component, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { APP_TITLE, APP_DEVELOPER, APP_DEVELOPER_LINK, APP_VERSION, ROUTE_ON_LOGIN, USERS_CAN_UNLOCK_THEIR_OWN_USER } from 'src/app/config/default.config';
import { animate, style, transition, trigger } from '@angular/animations';
import { AuthService } from 'src/app/modules/core/auth/auth.service';
import { Helpers } from 'src/app/core/helpers';
import { CokyLangCategory, __ } from 'src/app/core/langs';
import { Animations } from 'src/app/core/animations';
@Component({
  selector: 'app-login-help',
  templateUrl: './login-help.component.html',
  styleUrls: ['./login-help.component.scss'],
  animations: [
    Animations.hidenHeightAnimation()
  ]
})
export class LoginHelpComponent {

  public TITLE = "Login help";
  public APP_NAME = APP_TITLE;
  public DEVELOPER = APP_DEVELOPER;
  public DEVELOPER_LINK = APP_DEVELOPER_LINK;
  public VERSION = APP_VERSION;
  public LANG_CATEGORY = CokyLangCategory.USERS
  public CAN_UNLOCK: boolean = !USERS_CAN_UNLOCK_THEIR_OWN_USER;


  public loading: boolean = false;
  public type: string = "";
  public sentOk: boolean = false;

  public TYPE_PASSWORD = "password";
  public TYPE_USERNAME = "username";
  public TYPE_BLOCKED = "blocked";
  public TYPE_OTHER = "other";

  public EMAIL_ERROR_MESSAGE = __("Digite un correo electrónico válido", CokyLangCategory.USERS);
  public CANT_UNLOCK_MESSAGE = __("Lo sentimos, solo los administradores pueden desbloquear tu usuario.", CokyLangCategory.USERS)
  public SENT_MESSAGE = __(`Hemos enviado un mensaje a tu dirección de correo electrónico.
          Sigue las instrucciones para poder recuperar tu`, CokyLangCategory.USERS)
    + `<i>${this.type && this.type != this.TYPE_BLOCKED ? __(this.type) : __("Usuario")}</i>.`

  public formForget: FormGroup = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email]],
  });


  constructor(private helpers: Helpers,
    private activeRoute: ActivatedRoute, private formBuilder: FormBuilder,
    private authService: AuthService, private router: Router) {
    if (this.authService.isAuthenticated()) {
      this.router.navigate([ROUTE_ON_LOGIN])
    }
    this.activeRoute.params.subscribe(params => {
      this.type = params.type ? params.type : "";
      this.activeRoute.data.subscribe(data => {
        this.TITLE = data.title ? data.title : this.TITLE;
        this.TITLE = this.type != "" ? this.TITLE.replace("{type}", this.type) : this.TITLE;
        this.helpers.setTitle(this.TITLE);
      })
    })
  }

  async forget(event: Event) {
    event.preventDefault()
    this.loading = true;
    if (!this.sentOk && this.type != '' && this.type != this.TYPE_OTHER) {
      if (this.type == this.TYPE_BLOCKED && !this.CAN_UNLOCK) {
        this.helpers.errorMessage(this.CANT_UNLOCK_MESSAGE)
      } else {
        if (this.formForget.valid) {
          try {
            this.sentOk = true;
            // const result = await this.authService.verifyWithUsernameAndPassword(this.formForget.value)
            // if (result) {
            // this.router.navigate([ROUTE_ON_LOGIN])
            // }
            this.helpers.successMessage("Todo bien")
            this.loading = false
          } catch (error) {
            this.loading = false
            error = error.error ? error.error : error;
            this.helpers.errorMessage(error.message)
          }
        } else {
          this.loading = false
          this.helpers.alertMessage("Digite un correo electrónico válido")
        }
      }
    }
  }
}
