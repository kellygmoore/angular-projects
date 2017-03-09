import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Collectible } from './collectible';

@Injectable()
export class CollectibleService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private collectiblesUrl = 'api/collectibles';  // URL to web api

  constructor(private http: Http) { }

  getCollectibles(): Promise<Collectible[]> {
    return this.http.get(this.collectiblesUrl)
               .toPromise()
               .then(response => response.json().data as Collectible[])
               .catch(this.handleError);
  }

  getCollectible(id: number): Promise<Collectible> {
    const url = `${this.collectiblesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Collectible)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    console.log("In delete service.");
    const url = `${this.collectiblesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string, description: string, owner: string, located: string, willedTo: string): Promise<Collectible> {
    return this.http
      .post(this.collectiblesUrl, JSON.stringify({name: name, description: description, owner: owner, located: located, willedTo: willedTo}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(collectible: Collectible): Promise<Collectible> {
    const url = `${this.collectiblesUrl}/${collectible.id}`;
    return this.http
      .put(url, JSON.stringify(collectible), {headers: this.headers})
      .toPromise()
      .then(() => collectible)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
