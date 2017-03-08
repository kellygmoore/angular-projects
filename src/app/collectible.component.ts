import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Collectible } from './collectible';
import { CollectibleService } from './collectible.service';

@Component({
	moduleId: module.id,
	selector: 'collectibles-app',
	templateUrl: './collectible.component.html'
})
export class CollectiblesComponent implements OnInit {
	newCollectible: any;
	collectibles: any;
	collectibleObj: any;
	selectedCollectible: any = '';
	showDetail: boolean = false;

	constructor(
		private collectibleService: CollectibleService,
		private router: Router) {

			this.newCollectible = {};
			this.collectibles = [];
		}

	getCollectibles(): void {
		this.collectibleService
			.getCollectibles()
			.then(collectibles => this.collectibles = collectibles);
	}

	addCollectible() {
		this.collectibleObj = {
			newCollectible: this.newCollectible,
			catalogued: false
		}
		console.log("Collectible just added: ", this.newCollectible);
		this.collectibles.push(this.collectibleObj);
		console.log("List array: ", this.collectibles);
		this.newCollectible = {};
		event.preventDefault();
	}

	onSelect(collectible: any): void {

		if(this.selectedCollectible === collectible) {
			this.showDetail = !this.showDetail;
		} else {
			this.selectedCollectible = collectible;
			this.showDetail = true;
		}
  	}

	deleteCollectible(index: any) {
		this.showDetail = false;
		this.collectibles.splice(index, 1);
	}

	deleteSelectedCollectibles() {
		this.showDetail = false;
		for(var i=(this.collectibles.length -1); i > -1; i--) {
			if(this.collectibles[i].catalogued) {
				this.collectibles.splice(i,1);
			}
		}
	}
	ngOnInit(): void {
    	this.getCollectibles();
  	}

  	gotoDetail(): void {
  		this.router.navigate(['/detail', this.selectedCollectible.id]);
  	}
}