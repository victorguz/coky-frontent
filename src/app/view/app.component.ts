import { Component, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { getConfig } from '../config/default.config';
import { Helpers } from '../core/helpers/helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  constructor(private docTitle: Title, private helpers: Helpers) {
    docTitle.setTitle(helpers.getTitle());
    this.setInitialStyles();
  }


  private setInitialStyles() {
    document.documentElement.style.setProperty("navbar-color", getConfig("navbar-color"));
    document.documentElement.style.setProperty("navbar-hover-color", getConfig("navbar-hover-color"));
    document.documentElement.style.setProperty("navbar-height", getConfig("navbar-height"));
    document.documentElement.style.setProperty("navbar-icon-size", getConfig("navbar-icon-size"));

    document.documentElement.style.setProperty("white-color", getConfig("white-color"));
    document.documentElement.style.setProperty("back-color", getConfig("back-color"));
    document.documentElement.style.setProperty("back-color-hover", getConfig("back-color-hover"));
    document.documentElement.style.setProperty("back-color-opacity", getConfig("back-color-opacity"));

    document.documentElement.style.setProperty("primary-color", getConfig("primary-color"));
    document.documentElement.style.setProperty("primary-color-hover", getConfig("primary-color-hover"));
    document.documentElement.style.setProperty("primary-color-opacity", getConfig("primary-color-opacity"));

    document.documentElement.style.setProperty("gray-color", getConfig("gray-color"));
    document.documentElement.style.setProperty("gray-color-hover", getConfig("gray-color-hover"));
    document.documentElement.style.setProperty("gray-color-opacity", getConfig("gray-color-opacity"));

    document.documentElement.style.setProperty("dark-color", getConfig("dark-color"));
    document.documentElement.style.setProperty("dark-color-hover", getConfig("dark-color-hover"));
    document.documentElement.style.setProperty("dark-color-opacity", getConfig("dark-color-opacity"));

    document.documentElement.style.setProperty("secondary-color", getConfig("secondary-color"));
    document.documentElement.style.setProperty("secondary-color-hover", getConfig("secondary-color-hover"));
    document.documentElement.style.setProperty("secondary-color-opacity", getConfig("secondary-color-opacity"));

    document.documentElement.style.setProperty("danger-color", getConfig("danger-color"));
    document.documentElement.style.setProperty("danger-color-hover", getConfig("danger-color-hover"));
    document.documentElement.style.setProperty("danger-color-opacity", getConfig("danger-color-opacity"));

    document.documentElement.style.setProperty("alert-color", getConfig("alert-color"));
    document.documentElement.style.setProperty("alert-color-hover", getConfig("alert-color-hover"));
    document.documentElement.style.setProperty("alert-color-opacity", getConfig("alert-color-opacity"));

    document.documentElement.style.setProperty("success-color", getConfig("success-color"));
    document.documentElement.style.setProperty("success-color-hover", getConfig("success-color-hover"));
    document.documentElement.style.setProperty("success-color-opacity", getConfig("success-color-opacity"));

    document.documentElement.style.setProperty("info-color", getConfig("info-color"));
    document.documentElement.style.setProperty("info-color-hover", getConfig("info-color-hover"));
    document.documentElement.style.setProperty("info-color-opacity", getConfig("info-color-opacity"));

    document.documentElement.style.setProperty("input-color", getConfig("input-color"));

    document.documentElement.style.setProperty("sidebar-color", getConfig("sidebar-color"));
    document.documentElement.style.setProperty("sidebar-icon-size", getConfig("sidebar-icon-size"));
    document.documentElement.style.setProperty("sidebar-text-color", getConfig("sidebar-text-color"));
    document.documentElement.style.setProperty("sidebar-text-hover-color", getConfig("sidebar-text-hover-color"));
    document.documentElement.style.setProperty("sidebar-button-hover-color", getConfig("sidebar-button-hover-color"));
    document.documentElement.style.setProperty("sidebar-button-selected-color", getConfig("sidebar-button-selected-color"));

    document.documentElement.style.setProperty("default-radius", getConfig("default-radius"));
    document.documentElement.style.setProperty("dropdown-radius", getConfig("dropdown-radius"));
    document.documentElement.style.setProperty("card-radius", getConfig("card-radius"));
    document.documentElement.style.setProperty("field-radius", getConfig("field-radius"));
    document.documentElement.style.setProperty("button-radius", getConfig("button-radius"));
  }
}
