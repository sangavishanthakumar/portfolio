import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => this.scrollToSection(window.location.pathname.replace('/', '')), 100);
      }
    });
  }

  scrollToSection(section: string) {
    const el = document.querySelector(`#${section}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
