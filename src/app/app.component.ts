import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `<h1>{{ title }}</h1>
  			<nav>
  				<ul routerLink="/lifestory" routerLinkActive="active">My Life Story
  					<li><a routerLink="/add-life-story" routerLinkActive="active">Add Stories</a></li>
  					<li><a routerLink="/read-life-story" routerLinkActive="active">Read My Story</a></li>
  				</ul>
      			<a routerLink="/collectibles" routerLinkActive="active">My Collectibles</a>
  			</nav>
  			<router-outlet></router-outlet>
  `, 
  styleUrls: ['./app.component.css']
})
export class AppComponent  { title = "Kelly's Collectibles"; }
