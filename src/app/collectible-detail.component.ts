import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Collectible }        from './collectible';
import { CollectibleService } from './collectible.service';

@Component({
  moduleId: module.id,
  selector: 'my-collectible-detail',
  templateUrl: './collectible-detail.component.html'
})
export class CollectibleDetailComponent implements OnInit {

  collectible: Collectible;

  constructor(
    private collectibleService: CollectibleService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    console.log("In ngOnInit.");
    this.route.params
      .switchMap((params: Params) => this.collectibleService.getCollectible(+params['id']))
      .subscribe(collectible => this.collectible = collectible);
  }

  save(): void {
    this.collectibleService.update(this.collectible)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
