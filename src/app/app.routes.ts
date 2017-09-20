import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HotelGridComponent} from './hotel-grid/hotel-grid.component';

const routes: Routes = [
  {path: '', component: HotelGridComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
