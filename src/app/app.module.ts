import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }	 from '@angular/forms';
import { HttpModule }	 from '@angular/http';

import { CollectiblesComponent }  from './collectible';

@NgModule({
imports: [ BrowserModule,
		   FormsModule,
		   HttpModule 
		 ],
  providers: [],
  declarations: [ CollectiblesComponent ],
  bootstrap:    [ CollectiblesComponent ]
})
export class AppModule { }
