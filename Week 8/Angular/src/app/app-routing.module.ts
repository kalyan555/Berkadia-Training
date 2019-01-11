import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { BookingsComponent } from 'src/app/bookings/bookings.component';
import { LoginComponent } from 'src/app/login/login.component';
import { TruckBookingComponent } from 'src/app/truck-booking/truck-booking.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'Login', 
    pathMatch: 'full' 
  },
  {
    path:'Login',
    component:LoginComponent
  },
  {
    path:'Home',
    component:HomeComponent
  },
  {
    path:'Bookings',
    component:BookingsComponent
  },
  {
    path:'Book/:id',
    component:TruckBookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
