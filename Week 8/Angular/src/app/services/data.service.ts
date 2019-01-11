import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url="http://localhost:3000/foodtrucks/";
  BookingUrl="http://localhost:3000/bookings/";
  constructor(private readonly http:HttpClient) { }

  getAllFoodTrucks():any{
    return this.http.get(this.url);
  }

  getBookings(){
    return this.http.get(this.BookingUrl);
  }
  
  getFoodTruckById(id:string){
    console.log(this.url+id);
    return this.http.get(this.url+id);
  }

  BookingFoodTruck(foodtruck,bookingDate){
    let body = new URLSearchParams();
    body.set('user', localStorage.getItem('username'));
    body.set('truckname',foodtruck );
    body.set('date',bookingDate );
    
    let options = {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    
    this.http
        .post(this.BookingUrl, body.toString(), options)
        .subscribe(response => {
            console.log(response);
        });
  }
}
