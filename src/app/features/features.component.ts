import { Component, OnInit } from '@angular/core';
import { ServicedataService } from '../servicedata.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  // store data in string
c: any[] = [];
  constructor(private services: ServicedataService) { }

// Recive data in service
  reciveData() {
    console.log(this.services.Data());
    // print data
    this.c.push(this.services.Data());
    console.log(this.c);
  }

}
