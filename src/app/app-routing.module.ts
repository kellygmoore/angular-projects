import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { DashboardComponent }   from './dashboard.component';
import { AppComponent } from './app.component';
import { CollectiblesComponent }      from './collectible.component';
import { CollectibleDetailComponent }  from './collectible-detail.component';
import { LifeStoryComponent } from './life-story.component';

const routes: Routes = [
  { path: '', redirectTo: '/collectibles', pathMatch: 'full' },
  { path: 'detail/:id', component: CollectibleDetailComponent },
  { path: 'collectibles', component: CollectiblesComponent },
  { path: 'lifestory', component: LifeStoryComponent },
  { path: 'add-life-story', component: AppComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

