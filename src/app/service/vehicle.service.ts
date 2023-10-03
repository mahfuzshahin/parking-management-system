import { Injectable } from '@angular/core';
import {Vehicle} from "../model/vehicle";
@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() { }

  saveData(vehicleData: string, vehicle:Vehicle) {
    localStorage.setItem(vehicleData, JSON.stringify(vehicle));
  }
  getData(vehicleData: string): any[] {
    const data = localStorage.getItem(vehicleData);
    return data ? JSON.parse(data) : [];
  }

}
