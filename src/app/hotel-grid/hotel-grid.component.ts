import {Component} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Hotel} from '../../models/hotel';
import {SearchCriteria} from "../../models/search-criteria";

@Component({
  selector: 'hotel-grid',
  templateUrl: './hotel-grid.component.html',
  styleUrls: ['./hotel-grid.component.css']
})
export class HotelGridComponent {

  hotels: Hotel[];
  results:Hotel[];

  constructor(private dataService: DataService) {

    this.dataService.getHotels().subscribe((data) => {
      this.results = data;
      this.hotels = data;
    });

  }

  onSearchSubmit( searchTerm : SearchCriteria)
  {
    console.log(searchTerm);
    let keyWord = searchTerm.keyWord.toLowerCase();
    this.hotels = this.results.filter(hotel =>{return (hotel.name.toLowerCase().includes(keyWord)||hotel.address.toLowerCase().includes(keyWord))});
  }
}
