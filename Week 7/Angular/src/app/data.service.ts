import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private readonly http:HttpClient) { }
  fetchAirData(url:string):any{
    return this.http.get(url);
  }
}
