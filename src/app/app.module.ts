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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {CartItemComponent} from './cart-item/cart-item.component';
import {TravellerListComponent} from './traveller-list/traveller-list.component';
import {TravellerComponent} from './traveller/traveller.component';
import {MatAutocompleteModule, MatDatepickerModule, MatExpansionModule, MatInputModule, MatNativeDateModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HotelCardComponent,
    HotelGridComponent,
    RoomGridComponent,
    RoomCardComponent,
    SearchBarComponent,
    ShoppingCartComponent,
    CartItemComponent,
    SearchBarComponent,
    RoomCardComponent,
    TravellerListComponent,
    TravellerComponent
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
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatExpansionModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
