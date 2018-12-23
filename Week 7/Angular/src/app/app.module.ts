import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {HttpClientModule} from '@angular/common/http';
import { DataService } from 'src/app/data.service';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
