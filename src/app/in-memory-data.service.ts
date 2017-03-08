import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let collectibles = [
      {id: 11, name: 'Box of Letters'},
      {id: 12, name: 'Table'},
      {id: 13, name: 'Wedding Dress'},
      {id: 14, name: 'Recipe Collection'},
      {id: 15, name: 'Photo Album'},
      {id: 16, name: 'Quilt'},
      {id: 17, name: 'Christening Dress'},
      {id: 18, name: 'Wedding Ring'},
      {id: 19, name: 'Coins'},
      {id: 20, name: 'Pearl Necklace'}
    ];
    return {collectibles};
  }
}

