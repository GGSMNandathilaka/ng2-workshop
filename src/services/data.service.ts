import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../environments/environment';
import {Hotel} from '../models/hotel';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  hotelUrl = environment.api_hotels_url + '/hotels.json';
  roomUrl = environment.api_hotels_url + '/hotels';

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

  /***
   * Retrieve Rooms for specific hotel
   * @returns {Observable<any>}
   */
  getRooms(id: number) {
    return this.http.get(this.roomUrl + '/' + id + '/rooms.json')
      .map((res) => res.json());
  }

}
