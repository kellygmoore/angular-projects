import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }	 from '@angular/forms';
import { HttpModule }	 from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CollectibleDetailComponent } from './collectible-detail.component';
import { CollectibleService } from './collectible.service';
import { CollectiblesComponent }  from './collectible.component';

@NgModule({
  imports: [ BrowserModule,
		   FormsModule,
		   HttpModule, 
		   AppRoutingModule
		 ],
  providers: [ CollectibleService ],
  declarations: [ 
  			AppComponent,
  			CollectiblesComponent,
  			CollectibleDetailComponent,
  			],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
