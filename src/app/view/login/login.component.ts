import { Component, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { APP_TITLE, APP_DEVELOPER, APP_DEVELOPER_LINK, APP_VERSION, ROUTE_ON_LOGIN } from 'src/app/config/default.config';
import { animate, style, transition, trigger } from '@angular/animations';
import { AuthService } from 'src/app/modules/core/auth/auth.service';
import { Helpers } from 'src/app/core/helpers';
import { CokyLangCategory } from 'src/app/core/langs';
import { Animations } from 'src/app/core/animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    Animations.hidenHeightAnimation()
  ]
})

export class LoginComponent {

  public TITLE = "Login";
  public APP_NAME = APP_TITLE;
  public DEVELOPER = APP_DEVELOPER;
  public DEVELOPER_LINK = APP_DEVELOPER_LINK;
  public VERSION = APP_VERSION;
  public LANG_CATEGORY = CokyLangCategory.USERS

  public loading: boolean = false;

  public form: FormGroup = this.formBuilder.group({
    username: ["", [Validators.required]],
    password: ["", [Validators.required]],
  });

  constructor(private helpers: Helpers,
    private activeRoute: ActivatedRoute, private formBuilder: FormBuilder,
    private authService: AuthService, private router: Router) {
    if (this.authService.isAuthenticated()) {
      this.router.navigate([ROUTE_ON_LOGIN])
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
          this.router.navigate([ROUTE_ON_LOGIN])
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
