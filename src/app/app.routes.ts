import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HotelGridComponent} from './hotel-grid/hotel-grid.component';
import {DetailViewComponent} from "./detail-view/detail-view.component";

const routes: Routes = [
  {path: '', redirectTo: 'hotels', pathMatch: 'full'},
  {path: 'hotels', component: HotelGridComponent},
  {path: 'hotels/:id', component: DetailViewComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
