import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  //url:string="https://api.fullcontact.com/v3/person.enrich";
  url:string="https://pokeapi.co/api/v2/pokemon/";
  constructor(private http: HttpClient) { }

  sendPostRequest(pokemon:string) {
    return this.http.get(this.url+pokemon+"/");
  } 

}
