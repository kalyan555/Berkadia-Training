import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private readonly air:DataService) { }
  airData;
  ngOnInit() {
    document.body.classList.add('bg-img');  
    this.air.fetchAirData("https://api.openaq.org/v1/latest?city=Hyderabad").subscribe((res:any)=>{
      //console.log(res);
      this.airData=res.results;
    });
  }

}
