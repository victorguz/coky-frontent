import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getConfig } from 'src/app/config/default.config';
import { Helpers } from 'src/app/core/helpers/helpers';
import { CokyLangCategory } from 'src/app/core/langs/lang.model';
import { AuthService } from 'src/app/modules/core/auth/services/auth.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {

  public TITLE = "404";
  public APP_NAME = getConfig("app_title");
  public DEVELOPER = getConfig("app_developer");
  public DEVELOPER_LINK = getConfig("app_developer_link");
  public VERSION = getConfig("app_version");
  public LANG_CATEGORY = CokyLangCategory.NOT_FOUND

  public loading: boolean = false;
  public auth = false;
  
  constructor(private helpers: Helpers,
    private activeRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    public location: Location) {

    this.auth = this.authService.isAuthenticated();

    this.activeRoute.data.subscribe(data => {
      if (data.title) {
        this.TITLE = data.title;
        this.helpers.setTitle(data.title);
      }
    })

  }


}
