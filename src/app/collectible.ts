import { Component } from '@angular/core';

@Component({
	selector: 'collectibles-app',
	templateUrl: 'app/template.html',
	styleUrls: ['app/collectible.css']
})
export class CollectiblesComponent {
	newCollectible: string;
	collectibles: any;
	collectibleObj: any;

	constructor() {
		this.newCollectible = '';
		this.collectibles = [];
	}

	addCollectible() {
		this.collectibleObj = {
			newCollectible: this.newCollectible,
			catalogued: false
		}
		this.collectibles.push(this.collectibleObj);
		this.newCollectible = '';
		event.preventDefault();
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