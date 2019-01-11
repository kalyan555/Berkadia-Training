import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NavbarComponent} from '../navbar/navbar.component';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private readonly data:DataService) { }
  foodtrucks:any;
  bookingdate:"2011-08-19";
  ngOnInit() {
    document.body.classList.add('bg-img');
    this.data.getAllFoodTrucks().subscribe((res:any)=>{
      this.foodtrucks=res.users;
      console.log(this.foodtrucks);
    });
  }

  
}
