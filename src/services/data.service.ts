import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { environment } from '../environments/environment';
import { Hotel } from '../models/hotel';
import 'rxjs/add/operator/map';
import { Traveller } from '../models/traveller';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  hotelUrl = environment.api_hotels_url + '/hotels.json';
  roomUrl = environment.api_hotels_url + '/hotels';
  travellers: BehaviorSubject<Traveller> = new BehaviorSubject(new Traveller());

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
    return this.http.get(this.roomUrl + '/' + (id - 1) + '/rooms.json')
               .map((res) => res.json());
  }

  /***
   * Retrieve travellers for specific hotel
   * @returns {Observable<any>}
   */
  getTravellers(id: number) {
    return this.http.get(this.roomUrl + '/' + id + '/travellers.json')
               .map((res) => res.json());
  }

  getTraveller(key: string, hotelId: number) {
    return this.http.get(this.roomUrl + '/' + hotelId + '/travellers.json/' + key)
               .map((res) => res.json());
  }

  addTravellers(traveller: Traveller, id: number) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this.http
               .post(this.roomUrl + '/' + id + '/travellers.json', traveller, options)
               .subscribe(
                 (response: Response) => {
                   let data;
                   let traveller = this.getTraveller(data.name, id);
                   // this.travellers.next(response);
                   console.log('travellers', response);
                 },
                 (error: any) => {
                   console.log('Error in adding Traveller!');
                 }
               );
  }

}
