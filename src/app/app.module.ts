import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }	 from '@angular/forms';
import { HttpModule }	 from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { CollectibleDetailComponent } from './collectible-detail.component';
import { CollectibleService } from './collectible.service';
import { CollectiblesComponent }  from './collectible.component';

@NgModule({
  imports: [ 
       BrowserModule,
		   FormsModule,
		   HttpModule, 
       InMemoryWebApiModule.forRoot(InMemoryDataService),
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
