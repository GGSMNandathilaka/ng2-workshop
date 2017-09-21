import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {DataService} from '../services/data.service';
import {HotelCardComponent} from './hotel-card/hotel-card.component';
import {HotelGridComponent} from './hotel-grid/hotel-grid.component';
import {routing} from './app.routes';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { RoomGridComponent } from './room-grid/room-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelCardComponent,
    HotelGridComponent,
    RoomGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    RouterModule,
    CommonModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
