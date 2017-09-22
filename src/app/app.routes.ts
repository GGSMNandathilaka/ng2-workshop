import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HotelGridComponent} from './hotel-grid/hotel-grid.component';
import {RoomGridComponent} from './room-grid/room-grid.component';
import {SearchBarComponent} from "./search-bar/search-bar.component";

const routes: Routes = [
  {path: '', redirectTo: 'hotels', pathMatch: 'full'},
  {path: 'hotels', component: HotelGridComponent},
  {path: 'hotels/:id/rooms', component: RoomGridComponent},
  {path: 'search', component:SearchBarComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
