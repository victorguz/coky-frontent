import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { APP_TITLE, APP_DEVELOPER, APP_DEVELOPER_LINK, APP_VERSION, ROUTE_ON_LOGIN } from 'src/app/config/default.config';
import { animate, style, transition, trigger } from '@angular/animations';
import { AuthService } from 'src/app/modules/auth/auth.service';
import { Helpers } from 'src/app/core/helpers';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger(
      'opacityAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0 }),
            animate('0.2s ease-out',
              style({ height: "fit-content" }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ height: "fit-content" }),
            animate('0.2s ease-in',
              style({ height: 0 }))
          ]
        )
      ]
    )
  ]
})

export class LoginComponent {

  public TITLE = "Login";
  public APP_NAME = APP_TITLE;
  public DEVELOPER = APP_DEVELOPER;
  public DEVELOPER_LINK = APP_DEVELOPER_LINK;
  public VERSION = APP_VERSION;
  public loading: boolean = false;

  public form: FormGroup = this.formBuilder.group({
    username: ["", [Validators.required]],
    password: ["", [Validators.required]],
  });

  constructor(private docTitle: Title, private helpers: Helpers,
    private activeRoute: ActivatedRoute, private formBuilder: FormBuilder,
    private authService: AuthService, private router: Router) {
    if (this.authService.isAuthenticated()) {
      this.router.navigate([ROUTE_ON_LOGIN])
    }
    this.activeRoute.data.subscribe(data => {
      if (data.title) {
        this.TITLE = data.title;
        this.docTitle.setTitle(helpers.getTitle(data.title));
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


  validateForm() {
  }

}