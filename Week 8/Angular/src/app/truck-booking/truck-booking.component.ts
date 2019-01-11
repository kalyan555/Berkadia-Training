import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {NavbarComponent} from '../navbar/navbar.component';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-truck-booking',
  templateUrl: './truck-booking.component.html',
  styleUrls: ['./truck-booking.component.css']
})
export class TruckBookingComponent implements OnInit {
  bookingdate: any;
  status="";
  constructor(private route:ActivatedRoute,private router:Router,private readonly data:DataService) { }

  truckId;
  foodtruck
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.truckId=params.get('id');
    });
    this.data.getFoodTruckById(this.truckId).subscribe((res:any)=>{
      this.foodtruck=res.foodtrucks[0];
      console.log(this.foodtruck);
    });
  }
  
  save(truck){
    console.log(this.bookingdate);
    console.log(localStorage.getItem("username"))
    console.log(truck);
    this.data.BookingFoodTruck(truck,this.bookingdate);
    this.status="Booking Successfull";
  }
}
