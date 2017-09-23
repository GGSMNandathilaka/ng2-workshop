import {Component, Input, OnInit} from '@angular/core';
import {Room} from '../../models/room';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() item: Room;

  constructor() {
  }

  ngOnInit() {
  }

}
