import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `<h1>{{ title }}</h1>
  			<nav>
  				<!-- <a routerLink="/collectible-detail" routerLinkActive="active">Collectible Detail</a> -->
      			<!-- <a routerLink="/collectibles" routerLinkActive="active">Collectibles</a> -->
  			</nav>
  			<router-outlet></router-outlet>
  `
})
export class AppComponent  { title = "Kelly's Collectibles"; }
