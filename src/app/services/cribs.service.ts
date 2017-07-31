import { Injectable ,Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; //for observable

import { Subject } from 'rxjs/Subject'; // observer and observable


@Injectable()

export class CribsService {

  public newCribSubject = new Subject<any>();

  constructor(private http: Http) { }

  getAllCribs() {
    //hhtp call will return an observable
    return this.http.get('data/cribs.json')
      .map(res => res.json());
  }

  //communication bus between listingForm --> service --> Listing
  addCrib(data) {
    data.image = 'default-crib';
    this.newCribSubject.next(data);
  }

}
