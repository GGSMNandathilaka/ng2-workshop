import {Component, Input, OnInit} from '@angular/core';
import {Hotel} from '../../models/hotel';
import {Router} from '@angular/router';

@Component({
  selector: 'hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent implements OnInit {

  @Input() hotel: Hotel;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onDetailClick(id: number) {
    this.router.navigate(['hotels/' + id]);
  }

}
