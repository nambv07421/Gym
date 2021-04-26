import { Component, OnInit } from '@angular/core';
import { farder } from 'src/app/ultils/animation/farder.animation';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home',
  template: `<div [@routeAnimations]="prepareRoute(outlet)">
  <router-outlet #outlet="outlet"></router-outlet>
</div>`,


  animations: [farder],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
