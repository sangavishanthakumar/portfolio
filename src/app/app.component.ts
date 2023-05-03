import { Component } from '@angular/core';

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
}
