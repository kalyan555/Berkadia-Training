import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SuperheroesComponent } from './superheroes/superheroes.component';
import { NoneComponent } from './none/none.component';
import { HeroesdetailsComponent } from './heroesdetails/heroesdetails.component';
import { AuthGuard } from "./auth.guard";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SuperheroesComponent,
    NoneComponent,
    HeroesdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
