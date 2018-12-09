import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataset=[];
  constructor(private readonly data:DataService){}
  showData(){
    this.dataset=this.data.getData();
  }
}
