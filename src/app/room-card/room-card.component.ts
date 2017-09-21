import {Component, Input, OnInit} from '@angular/core';
import {Room} from '../../models/room';

@Component({
  selector: 'room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent implements OnInit {

  @Input() room: Room;
  roomCount = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  constructor() {
  }

  ngOnInit() {
  }

}
