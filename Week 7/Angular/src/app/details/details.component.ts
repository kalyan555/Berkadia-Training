import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private readonly air:DataService,private route:ActivatedRoute,private router:Router) { }
  locationAirData;
  location;
  ngOnInit() {
    document.body.classList.add('bg-img');
    this.route.paramMap.subscribe(params => {
      this.location=params.get('location');
    });
    this.air.fetchAirData("https://api.openaq.org/v1/latest?location="+this.location).subscribe((res:any)=>{
      console.log(res.results[0]);  
      this.locationAirData=res.results[0];
    });
  }

}
