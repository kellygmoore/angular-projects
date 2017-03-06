import { Component } from '@angular/core';

@Component({
	selector: 'collectibles-app',
	templateUrl: 'app/template.html',
	styleUrls: ['app/collectible.css']
})
export class CollectiblesComponent {
	newCollectible: any;
	collectibles: any;
	collectibleObj: any;
	selectedCollectible: any = '';
	showDetail: boolean = false;

	constructor() {
		this.newCollectible = {};
		this.collectibles = [];
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
}