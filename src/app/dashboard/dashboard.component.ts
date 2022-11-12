import { Component, OnInit } from '@angular/core';
import { DashServiceService } from '../appServices/dash-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _myService:DashServiceService) { }
  employee = [{name:"",id:"" , email:""}]
    
  

  ngOnInit() {
    this._myService.employee().subscribe(employeeData => this.employee = employeeData)
    console.log(this.employee);
  }
}