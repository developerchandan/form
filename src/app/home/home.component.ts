import { Component } from '@angular/core';
import { ServicedataService } from '../servicedata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  // create the data
  // emp: object = {empno: 100, name:"ravi", salary: 2000};
  // craete data in searchPipe
  searchTerm:string;
  emp:object[]=[
  {emp:100, name:"ravi",salary:5000},
  {emp:100, name:"ravi",salary:5000},
  {emp:100, name:"vikas",salary:5000},
  {emp:200, name:"vinay",salary:5000},
  {emp:300, name:"ram",salary:5000},
  {emp:800, name:"ramohanvi",salary:5000},]
  constructor(private services: ServicedataService) { }

  // ngOnInit(): void {
  //   this.services.a = this.emp;
  // }
  // sendData() {

  // }

}
