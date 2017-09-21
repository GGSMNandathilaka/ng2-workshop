import {Component} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Hotel} from '../../models/hotel';

@Component({
  selector: 'hotel-grid',
  templateUrl: './hotel-grid.component.html',
  styleUrls: ['./hotel-grid.component.css']
})
export class HotelGridComponent {

  hotels: Hotel[];

  constructor(private dataService: DataService) {

    this.dataService.getHotels().subscribe((data) => {
      this.hotels = data;
    });
  }
}
