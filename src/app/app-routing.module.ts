import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VehicleParkingComponent} from "./parking/vehicle-parking/vehicle-parking.component";
import {DashboardComponent} from "./dashboard/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: 'vehicle-parking',
    component: VehicleParkingComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
