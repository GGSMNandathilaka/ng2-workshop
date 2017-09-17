import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../environments/environment';
import {Hotel} from '../models/hotel';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  hotelUrl = environment.api_hotels_url;

  constructor(private http: Http) {
  }

  /***
   * Retrieve Hotels from firebase app
   * @returns {Observable<any>}
   */
  getHotels() {
    return this.http.get(this.hotelUrl)
      .map((res) => res.json());
  }

}
