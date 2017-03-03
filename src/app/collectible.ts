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
	selectedCollectible: any;
	showThisOne: boolean;

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
    	this.selectedCollectible = collectible;
    	this.showThisOne = !this.showThisOne;
  	}

	deleteCollectible(index: any) {
		this.collectibles.splice(index, 1);
	}

	deleteSelectedCollectibles() {
		for(var i=(this.collectibles.length -1); i > -1; i--) {
			if(this.collectibles[i].catalogued) {
				this.collectibles.splice(i,1);
			}
		}
	}
}