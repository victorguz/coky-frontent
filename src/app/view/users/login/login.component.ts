import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Helpers } from '../../../core/helpers';
import { debounceTime } from 'rxjs/operators';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class CokyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  public title = "Login";

  public form: FormGroup;
  public usernameAdvise: string = "false";
  public passwordAdvise: string = "false";
  public matcher = new CokyErrorStateMatcher();

  constructor(private docTitle: Title, private helpers: Helpers,
    private activeRoute: ActivatedRoute, private formBuilder: FormBuilder) {
    this.activeRoute.data.subscribe(data => {
      console.log(activeRoute)
      if (data.title) {
        this.title = data.title;
        this.docTitle.setTitle(helpers.getTitle(data.title));
      }
    })

    this.buildForm()
  }

  async login(event: Event) {
    event.preventDefault()
    this.validateForm()
    if (this.form.valid) {
      //send data
      this.validateForm()
      this.helpers.successMessage("Logueado")
    }
  }

  buildForm() {
    this.form = this.formBuilder.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
    })
  }

  validateForm() {
    if (this.form.get("username").errors && this.form.get("username").hasError("touched")) {
      if (this.form.get("username").hasError("required")) {
        this.usernameAdvise = "username is required";
      }
    }
  }

}
