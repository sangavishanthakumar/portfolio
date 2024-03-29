import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  showMenu: boolean | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.fragment)
    ).subscribe(fragment => this.scrollTo(fragment));
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  scrollTo(elementId: string | null): void {
    if (elementId) {
      const el = document.querySelector(`#${elementId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
