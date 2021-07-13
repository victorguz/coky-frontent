import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { getConfig } from 'src/app/config/default.config';
import { Helpers } from 'src/app/core/helpers/helpers';
import { CokyLangCategory } from 'src/app/core/langs/lang.model';
import { AuthService } from 'src/app/modules/core/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public TITLE = "Login help";
  public APP_NAME = getConfig("app_title");
  public DEVELOPER = getConfig("app_developer");
  public DEVELOPER_LINK = getConfig("app_developer_link");
  public VERSION = getConfig("app_version");
  public LANG_CATEGORY = CokyLangCategory.USERS

  public loading: boolean = false;

  public hActiveTitle: string = "";
  public hActiveTitleContent: string = "";

  public hActiveTitleCursor: boolean = false;
  public hActiveTitleContentCursor: boolean = true;

  public isTypeWriterOff: boolean = false;
  public isHiddenHTitle: boolean = false;

  public hTitles = [
    { value: "Marketing,", description: "We help you define better strategies to reach customers and market your products and services." },
    { value: "Software,", description: "We carry out the design and development of your software projects." },
    { value: "Design,", description: "We create the most innovative pieces that will help you convey your brand identity." },
    { value: "Branding,", description: "We design and develop the brand identity of your company so that it is attractive to the audience you want to reach." },
    { value: "Web & apps,", description: "Websites, business, web and mobile applications tailored to your needs." },
    { value: "Innovation.", description: "We are the creative team you need, we know how to move you forward." }
  ];

  public form: FormGroup = this.formBuilder.group({
    username: ["", [Validators.required]],
    password: ["", [Validators.required]],
  });

  constructor(private helpers: Helpers,
    private activeRoute: ActivatedRoute, private formBuilder: FormBuilder,
    private authService: AuthService, private router: Router) {
    if (this.authService.isAuthenticated()) {
      this.router.navigate([getConfig("route_on_login")])
    }
    this.activeRoute.data.subscribe(data => {
      if (data.title) {
        this.TITLE = data.title;
        this.helpers.setTitle(data.title);
      }
    })
    // this.startTypeWriterEffect()
    this.startChangeEffect()
  }

  ngOnInit(): void {
    // this.headerTitleLoading()
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

  startTypeWriterEffect() {
    this.isHiddenHTitle = false
    this.isTypeWriterOff = false
    this.typeWriterEffect("title", 100)//Typewriter effect for the header title
    this.typeWriterEffect("content", 10)//Typewriter effect for the header title description
    this.cursorEffect()
  }

  typeWriterEffect(type: string = "title", speed: number = 130, textIndex: number = 0, lastTitle: number = 0) {
    let title = type == "title" ? this.hTitles[lastTitle].value : this.hTitles[lastTitle].description
    if (textIndex < title.length) {
      type == "title" ?
        this.hActiveTitle += title.charAt(textIndex)
        : this.hActiveTitleContent += title.charAt(textIndex)
      textIndex++;
      setTimeout(() => {
        this.typeWriterEffect(type, speed, textIndex, lastTitle)
      }, speed);
    } else {
      setTimeout(() => {
        type == "title" ?
          this.hActiveTitle = "" :
          this.hActiveTitleContent = ""
        console.log(lastTitle)
        lastTitle = lastTitle < this.hTitles.length - 1 ? lastTitle + 1 : 0
        textIndex = 0;
        this.typeWriterEffect(type, speed, textIndex, lastTitle)
      }, 3000)
    }
  }

  cursorEffect() {
    setInterval(() => {
      this.hActiveTitleCursor = this.hActiveTitleCursor ? false : true
      this.hActiveTitleContentCursor = this.hActiveTitleContentCursor ? false : true
    }, 500)
  }

  startChangeEffect() {
    this.isTypeWriterOff = true
    this.isHiddenHTitle = false
    this.changeEffect(3000, 0, true)
  }
  /**
   * Efecto de cambiar el texto por otro, se puede aplicar efecto al ocultar.
   * @param speed 
   * @param lastIndex 
   */
  changeEffect(speed: number = 3000, lastIndex: number = 0, transition: boolean = false) {
    this.hActiveTitle = this.hTitles[lastIndex].value
    this.hActiveTitleContent = this.hTitles[lastIndex].description
    this.isHiddenHTitle = false
    lastIndex = lastIndex < this.hTitles.length - 1 ? lastIndex + 1 : 0
    if (transition) {
      setTimeout(() => {
        this.isHiddenHTitle = true
        setTimeout(() => {
          this.changeEffect(speed, lastIndex, transition)
        }, 500);
      }, speed)
    } else {
      setTimeout(() => {
        this.changeEffect(speed, lastIndex, transition)
      }, speed)
    }
  }


}
