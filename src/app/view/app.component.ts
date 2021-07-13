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

  constructor(private _helpers: Helpers) {
    this._helpers.setTitle();
    this.setInitialStyles();
  }


  private setInitialStyles() {
    const properties = getConfig("css_style_properties")
    properties.forEach(prop => {
      document.documentElement.style.setProperty(`--${prop.name.replaceAll("_", "-")}`, prop.value)
    });
  }
}
