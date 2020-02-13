import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './animations/animations';
import { Favorites } from './core/Favorites';
const ANIMATION = 'animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slider
  ]
})
export class AppComponent {
  constructor() {}
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData[ANIMATION];
  }
}
