import {Component, OnInit} from '@angular/core';
import {VehicleService} from "../../service/vehicle.service";
import {Vehicle} from "../../model/vehicle";
import {Chart, registerables} from "chart.js";
import {Title} from "@angular/platform-browser";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  vehicle = new Vehicle();

  vehicleDataList: any = [];
  microBus: any = [];
  car: any = [];
  truck: any = [];
  public chart: any;
  public lineChart: any;
  constructor(private service: VehicleService,
              private titleService: Title) {
    Chart.register(...registerables);
    this.titleService.setTitle('Dashboard | Academic Setup');
  }

  ngOnInit() {
    this.createPieChart();
    this.createLineChart();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const today = new Date().toLocaleDateString()
    console.log(today)
    this.vehicleDataList = this.service.getData('vehicleList');
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const Time = `${hours}:${minutes}:${seconds}`;
    const Time2 = `${hours+2}:${minutes}:${seconds}`;

    this.microBus = this.vehicleDataList.filter((item:any)=> item.vehicleType === 'Microbus' && item.carExitTime >= Time && item.carExitTime <= Time2)
    this.car = this.vehicleDataList.filter((item:any)=> item.vehicleType === 'Car' && item.carExitTime >= Time && item.carExitTime <= Time2)
    this.truck = this.vehicleDataList.filter((item:any)=> item.vehicleType === 'Truck' && item.carExitTime >= Time && item.carExitTime <= Time2)

  }

  createPieChart(){
    this.chart = new Chart("MyChart", {
      type: 'pie',
      data: {
        datasets: [{
          data: [10, 13, 20],
          backgroundColor: ["rgba(242, 85, 33, .9)", "rgba(138,53,25,0.7)", "rgba(184,91,61,0.5)"],
          hoverBackgroundColor: ["rgba(242, 85, 33, .9)", "rgba(242, 85, 33, .7)", "rgba(241,78,25,0.5)"]
        }],
        labels: ["Microbus", "Car", "Truck"]
      },
      options: {responsive: true}
    });
  }
  createLineChart(){
    this.lineChart = new Chart("LineChart",{
      type: 'line',
      data: {
        labels: ["50", "150", "250", "300", "350"],
        datasets: [{
          label: "Daily",
          data: [0, 10, 20, 10, 25, 75, 50],
          backgroundColor: 'transparent',
          borderColor: "rgba(214,33,242,0.9)",
          borderWidth: 3,
          pointStyle: 'circle',
        }, {
          label: "Weekly",
          data: [0, 30, 10, 60, 50, 63, 10],
          backgroundColor: 'transparent',
          borderColor: "rgba(19,133,11,0.9)",
          borderWidth: 3,
        }, {
          label: "Monthly",
          data: [0, 50, 40, 20, 40, 79, 20],
          backgroundColor: 'transparent',
          borderColor: "rgba(105,30,6,0.5)",
          borderWidth: 3,
        }]
      },

      options: {
        responsive: true,
      }
    })
  }
}
