import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let collectibles = [
      {id: 11, name: 'Box of Letters', description: 'from the war', owner: 'Harold', located: 'Hall closet'},
      {id: 12, name: 'Table', description: 'from Hazel', owner: 'Kelly', located: 'Dining room'},
      {id: 13, name: 'Wedding Dress', description: 'from 1915', owner: 'Claire', located: 'Bedroom closet'},
      {id: 14, name: 'Recipe Collection', description: 'cards from Mildred', owner: 'Claire', located: 'Kitchen'},
      {id: 15, name: 'Photo Album', description: "Gary's childhood pictures", owner: 'Gary', located: 'Hall closet'},
      {id: 16, name: 'Quilt', description: 'made by Claire', owner: 'Kelly', located: 'Guest bedroom'},
      {id: 17, name: 'Christening Dress', description: 'from 1908', owner: 'Janice', located: 'Hall closet'},
      {id: 18, name: 'Wedding Ring', description: 'from 1967', owner: 'Claire', located: 'Jewelry box'},
      {id: 19, name: 'Coins', description: 'from collection', owner: 'Gary', located: 'Bedroom'},
      {id: 20, name: 'Pearl Necklace', description: 'passed from generations', owner: 'Claire', located: 'Jewelry box'}
    ];
    
    return {collectibles};
  }

}

