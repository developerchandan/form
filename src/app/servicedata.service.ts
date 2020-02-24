import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicedataService {
   a: any ;
  Data() {
    console.log(this.a);
    return this.a;
  }
}
