import {Component, Input, OnInit} from '@angular/core';
import {Hotel} from '../../models/hotel';

@Component({
  selector: 'hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent implements OnInit {

  @Input() hotel: Hotel;

  constructor() {
  }

  ngOnInit() {
  }

}
