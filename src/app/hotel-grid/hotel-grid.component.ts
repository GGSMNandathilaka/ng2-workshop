import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Hotel} from '../../models/hotel';
import {SearchCriteria} from "../../models/search-criteria";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'hotel-grid',
  templateUrl: './hotel-grid.component.html',
  styleUrls: ['./hotel-grid.component.css']
})
export class HotelGridComponent implements OnInit{
  hotels: Hotel[];
  results:Hotel[];
  city: string;

  constructor(private dataService: DataService,private activatedRoute: ActivatedRoute) {

    this.dataService.getHotels().subscribe((data) => {
      this.results = data;
      this.hotels = data;

      console.log(this.city);
      if (this.city) {
        let keyWord = this.city.toLowerCase();
        console.log(this.results);
        this.hotels = this.results.filter(hotel => {
          return (hotel.location==keyWord)
        });
      }
    });

    this.activatedRoute.params.subscribe(params => {
      this.city = params['city'];
    });




  }

  ngOnInit(){

  }

}
