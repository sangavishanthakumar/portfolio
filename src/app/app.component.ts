import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  showMenu: boolean | undefined;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  scrollTo(element: string): void {
    const el = document.querySelector(element);
    // @ts-ignore
    el.scrollIntoView({ behavior: 'smooth' });
  }

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('de');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
