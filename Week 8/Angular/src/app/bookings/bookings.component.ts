import { Component, OnInit } from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor(private readonly data:DataService) { }
  bookings:any;
  ngOnInit() {
    document.body.classList.add('bg-img');
    this.data.getBookings().subscribe((res:any)=>{
      this.bookings=res.bookings;
      console.log(this.bookings);
    });
  }

}
