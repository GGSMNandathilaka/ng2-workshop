import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Room} from '../../models/room';

@Component({
  selector: 'room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent implements OnInit {

  @Input() room: Room;
  @Output() roomSelectEmitter: EventEmitter<Room> = new EventEmitter();
  @Output() roomRemoveEmitter: EventEmitter<number> = new EventEmitter();
  roomOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  count = 0;
  isFavourite = false;

  constructor() {
  }

  ngOnInit() {
  }

  onFavourite(event) {
    if (!this.isFavourite) {
      this.isFavourite = true;
    } else {
      this.isFavourite = false;
    }

    if (this.isFavourite) {
      this.roomSelectEmitter.emit(this.room);
    } else {
      this.roomRemoveEmitter.emit(this.room.id);
    }
  }

  countTotalPrice(roomCount: number, price: string) {
    if (roomCount !== undefined && roomCount !== null) {
      const p = +price;
      return roomCount * p;
    } else {
      return 0;
    }
  }
}
