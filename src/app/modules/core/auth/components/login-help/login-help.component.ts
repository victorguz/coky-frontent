import { Component, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/modules/core/auth/services/auth.service';
import { Helpers } from 'src/app/core/helpers/helpers';
import { Animations } from 'src/app/core/animations';
import { getConfig } from 'src/app/config/default.config';
import { CokyLangCategory } from 'src/app/core/langs/lang.model';
import { __ } from 'src/app/core/langs/lang.phrases';
@Component({
  selector: 'app-login-help',
  templateUrl: './login-help.component.html',
  animations: [
    Animations.hidenHeightAnimation()
  ]
})
export class LoginHelpComponent {

  public TITLE = "Login help";
  public APP_NAME = getConfig("app_title");
  public DEVELOPER = getConfig("app_developer");
  public DEVELOPER_LINK = getConfig("app_developer_link");
  public VERSION = getConfig("app_version");
  public LANG_CATEGORY = CokyLangCategory.USERS
  public CAN_UNLOCK: boolean = !getConfig("users_can_unlock_their_own_user");


  public loading: boolean = false;
  public type: string = "";
  public sentOk: boolean = false;

  public TYPE_PASSWORD = "password";
  public TYPE_USERNAME = "username";
  public TYPE_BLOCKED = "blocked";
  public TYPE_OTHER = "other";

  public formForget: FormGroup = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email]],
  });


  constructor(private helpers: Helpers,
    private activeRoute: ActivatedRoute, private formBuilder: FormBuilder,
    private authService: AuthService, private router: Router) {
    if (this.authService.isAuthenticated()) {
      this.router.navigate([getConfig("route_on_login")])
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
        this.helpers.errorMessage(__("Lo sentimos, solo los administradores pueden desbloquear usuarios.", CokyLangCategory.USERS))
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
