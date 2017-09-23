import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {DataService} from '../services/data.service';
import {HotelCardComponent} from './hotel-card/hotel-card.component';
import {HotelGridComponent} from './hotel-grid/hotel-grid.component';
import {routing} from './app.routes';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {RoomGridComponent} from './room-grid/room-grid.component';
import {RoomCardComponent} from './room-card/room-card.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {MyDatePickerModule} from 'mydatepicker';
import {MdAutocompleteModule, MdDatepickerModule, MdInputModule, MdNativeDateModule} from "@angular/material";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelCardComponent,
    HotelGridComponent,
    RoomGridComponent,
    RoomCardComponent,
    SearchBarComponent,
    ShoppingCartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    routing,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    MdInputModule,
    MdNativeDateModule,
    MdDatepickerModule,
    MdAutocompleteModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
