import { Component,  } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {

// creadting an instance variable 
a: any;
b: any;
// emp data
emps: any[] = [{eno: 100, name:"ravi", salary: 3000},
{eno: 100, name: "ravi", salary: 3000},
{eno: 100, name:"ravi", salary: 3000},
{eno: 100, name:"ravi", salary: 3000},
{eno: 100, name:"ravi", salary: 3000}

}]
