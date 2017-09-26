import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HotelGridComponent} from './hotel-grid/hotel-grid.component';
import {RoomGridComponent} from './room-grid/room-grid.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {TravellerListComponent} from './traveller-list/traveller-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'hotels/:city', component: HotelGridComponent},
  {path: 'hotels', component: HotelGridComponent},
  {path: 'hotels/:id/rooms', component: RoomGridComponent},
  {path: 'search', component: SearchBarComponent},
  {path: 'hotels/:id/rooms', component: RoomGridComponent},
  {path: 'hotels/:id/travellers', component: TravellerListComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
