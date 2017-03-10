import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Collectible } from './collectible';
import { People } from './people';
import { CollectibleService } from './collectible.service';

@Component({
	moduleId: module.id,
	selector: 'collectibles-app',
	templateUrl: './collectible.component.html',
	styleUrls: ['./collectible.css']
})
export class CollectiblesComponent implements OnInit {
	collectibles: Collectible[];
	selectedCollectible: Collectible;
	
	people = [
      {id: 1, fullname: 'Kelly Moore'},
      {id: 2, fullname: 'Eric Moore'},
      {id: 3, fullname: 'Marion Moore'},
      {id: 4, fullname: 'Louis Moore'},
      {id: 5, fullname: 'Winnie Moore'},
      {id: 6, fullname: 'Sage Moore'},
      {id: 7, fullname: 'Teddy Moore'},
    ];
    selectedPerson: People = this.people[0];

    onChangeObj(newObj: any) {
    	console.log("new value: ", newObj);
    }
	//newCollectible: any;
	//collectibles: any;
	//collectibleObj: any;
	//selectedCollectible: any = '';
	showDetail: boolean = false;

	constructor(
		private collectibleService: CollectibleService,
		private router: Router) {
			//this.newCollectible = {};
			//this.collectibles = [];
		}

	getCollectibles(): void {
		this.collectibleService
			.getCollectibles()
			.then(collectibles => this.collectibles = collectibles);
	}

	add(name: string, description: string, owner: string, located: string, willedTo: string): void {
		name = name.trim();
		if(!name) {
			return;
		}
		this.collectibleService.create(name, description, owner, located, willedTo)
			.then(collectible => {
				this.collectibles.push(collectible);
				this.selectedCollectible = null;
			});
	}

	delete(collectible: Collectible): void {
    this.collectibleService
        .delete(collectible.id)
        .then(() => {
          this.collectibles = this.collectibles.filter(h => h !== collectible);
          if (this.selectedCollectible === collectible) { this.selectedCollectible = null; }
        });
  	}

	// addCollectible() {
	// 	this.collectibleObj = {
	// 		newCollectible: this.newCollectible,
	// 		catalogued: false
	// 	}
	// 	console.log("Collectible just added: ", this.newCollectible);
	// 	this.collectibles.push(this.collectibleObj);
	// 	console.log("List array: ", this.collectibles);
	// 	this.newCollectible = {};
	// 	event.preventDefault();
	// }

	onSelect(collectible: any): void {

		if(this.selectedCollectible === collectible) {
			this.showDetail = !this.showDetail;
		} else {
			this.selectedCollectible = collectible;
			this.showDetail = true;
		}
  	}

	// deleteCollectible(index: any) {
	// 	this.showDetail = false;
	// 	this.collectibles.splice(index, 1);
	// }

	// deleteSelectedCollectibles() {
	// 	this.showDetail = false;
	// 	for(var i=(this.collectibles.length -1); i > -1; i--) {
	// 		if(this.collectibles[i].catalogued) {
	// 			this.collectibles.splice(i,1);
	// 		}
	// 	}
	// }
	ngOnInit(): void {
    	this.getCollectibles();
    	this.selectedPerson = this.people[0];
  	}

  	onInput($event: any) {
  		$event.preventDefault();
  		console.log('Selected: ', $event.target.value);
  	}

  	gotoDetail(): void {
  		this.router.navigate(['/detail', this.selectedCollectible.id]);
  	}
}