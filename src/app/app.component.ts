import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formp';
  data: any[] = [];
  submitData(s) {
    console.log(s);
    this.data.push(s);
    console.log(this.data);
  }
}
