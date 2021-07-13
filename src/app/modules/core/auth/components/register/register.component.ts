import { Component, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/modules/core/auth/services/auth.service';
import { Helpers } from 'src/app/core/helpers/helpers';
import { getConfig } from 'src/app/config/default.config';
import { CokyLangCategory } from 'src/app/core/langs/lang.model';
import { Animations } from 'src/app/core/animations';
import { UserRole } from '../../../users/models/users.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  animations: [
    Animations.hidenHeightAnimation()
  ]
})
export class RegisterComponent {

  public TITLE = "Register";
  public APP_NAME = getConfig("app_title");
  public DEVELOPER = getConfig("app_developer");
  public DEVELOPER_LINK = getConfig("app_developer_link");
  public VERSION = getConfig("app_version");
  public LANG_CATEGORY = CokyLangCategory.USERS
  public CAN_UNLOCK: boolean = getConfig("users_can_unlock_their_own_user");
  public CAN_REGISTER: boolean = getConfig("users_can_register_themselves");
  private DEFAULT_ROLE: UserRole = getConfig("users_default_register_role");
  
  public loading: boolean = false;

  public form: FormGroup = this.formBuilder.group({
    first_name: ["", [Validators.required]],
    second_name: ["", [Validators.required]],
    first_lastname: ["", [Validators.required]],
    second_lastname: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    username: ["", [Validators.required]],
    password: ["", [Validators.required]],
  });

  constructor(private helpers: Helpers,
    private activeRoute: ActivatedRoute, private formBuilder: FormBuilder,
    private authService: AuthService, private router: Router) {
    if (this.authService.isAuthenticated()) {
      this.router.navigate([getConfig("route_on_login")])
    }
    if (!this.CAN_REGISTER) {
      this.router.navigate([getConfig("route_on_cant_register")])
    }
    this.activeRoute.data.subscribe(data => {
      if (data.title) {
        this.TITLE = data.title;
        this.helpers.setTitle(data.title);
      }
    })

  }

  async login(event: Event) {
    event.preventDefault()
    this.loading = true
    if (this.form.valid) {
      try {
        const result = await this.authService.verifyWithUsernameAndPassword(this.form.value)
        if (result) {
          this.router.navigate([getConfig("route_on_login")])
        }
      } catch (error) {
        this.loading = false
        error = error.error ? error.error : error;
        this.helpers.errorMessage(error.message)
      }
    } else {
      this.loading = false
      this.helpers.alertMessage("Digite un nombre de usuario y contraseña válidos")
    }
  }

}
