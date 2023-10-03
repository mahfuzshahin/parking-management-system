import {Component, OnInit} from '@angular/core';
import {Vehicle} from "../../model/vehicle";
import {VehicleService} from "../../service/vehicle.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-vehicle-parking',
  templateUrl: './vehicle-parking.component.html',
  styleUrls: ['./vehicle-parking.component.css']
})
export class VehicleParkingComponent implements OnInit{
  vehicle = new Vehicle();

  vehicleDataList: any = [];
  isSave:boolean = true;
  isUpdate: boolean = false;
  types = [{id:1, name: 'Microbus', price: 100},{id:2, name: 'Car', price: 200}, {id:3, name: 'Truck', price: 300}]
  constructor(private service: VehicleService,
              private toastr: ToastrService) {
  }
  ngOnInit(){
    this.vehicleDataList = this.service.getData('vehicleList');
  }
  saveData(){
    this.vehicleDataList.push(this.vehicle);
    this.service.saveData('vehicleList', this.vehicleDataList);
    this.vehicle = new Vehicle();
    this.toastr.success('Successfully Save');
  }

  viewVehicle(vehicle: any) {
    this.vehicle = vehicle;
    this.isUpdate = true;
    this.isSave = false
  }

  cancelData() {
    this.vehicle = new Vehicle();
    this.isSave=true;
    this.isUpdate = false;
  }
  updateData(){

    this.vehicleDataList.findIndex((item: Vehicle) => item === this.vehicle);

    console.log(this.vehicleDataList)
    // this.service.saveData('vehicleList',this.vehicle)
  }
}

