import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Helpers } from '../../../core/helpers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  public title = "Login";

  private form: FormGroup;

  constructor(private docTitle: Title, private helpers: Helpers, private activeRoute: ActivatedRoute) {
    this.activeRoute.data.subscribe(data => {
      console.log(activeRoute)
      if (data.title) {
        this.title = data.title;
        this.docTitle.setTitle(helpers.getTitle(data.title));
      }
    })
  }

  login(): void {
    this.helpers.errorMessage("Saludos")
  }

}
