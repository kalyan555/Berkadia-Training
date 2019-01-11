import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  url="http://localhost:3000/users";
  constructor(private readonly http:HttpClient) { }
  login(username:string,password:string):any{
    //console.log(username);
    //console.log(password);
    return this.http.get(this.url+"/"+username+"/"+password);
  }
}
