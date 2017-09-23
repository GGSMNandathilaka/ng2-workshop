import {Component, Input, OnInit} from '@angular/core';
import {Room} from '../../models/room';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  @Input() items: Room[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  formatItemText(): string {
    let txt = '';
    if (this.items) {
      if (this.items.length > 1) {
        txt = 'Items';
      } else {
        txt = 'Item';
      }
    }
    return txt;
  }

  getItemCount(): number {
    let itemCount = 0;
    if (this.items) {
      if (this.items.length > 0) {
        for (let i = 0; i < this.items.length; i++) {
          itemCount += +this.items[i].roomCount;
        }
      }
    }
    return itemCount;
  }

  getTotaPrice() {
    let tot = 0;
    if (this.items) {
      if (this.items.length > 0) {
        for (let i = 0; i < this.items.length; i++) {
          tot += +this.items[i].totalPrice;
        }
      }
    }
    return tot;
  }
}
