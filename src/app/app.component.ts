import {Component} from '@angular/core';
import {DataService} from '../services/data.service';
import {Hotel} from '../models/hotel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hotels: Hotel[];

  constructor(private dataService: DataService) {

    this.dataService.getHotels().subscribe((data) => {
      this.hotels = data;
    });

  }
}
