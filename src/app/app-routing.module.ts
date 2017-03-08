import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { DashboardComponent }   from './dashboard.component';
import { CollectiblesComponent }      from './collectible.component';
import { CollectibleDetailComponent }  from './collectible-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/collectibles', pathMatch: 'full' },
  { path: 'detail/:id', component: CollectibleDetailComponent },
  { path: 'collectibles', component: CollectiblesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

