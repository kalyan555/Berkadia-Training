import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData():any{
    return [{
      "name":"kalyan",
      "department":"IT"
      },{
        "name":"krishna",
        "department":"CSE"
      },{
        "name":"reddy",
        "department":"ECE"
      },{
        "name":"venkat",
        "department":"MECH"
      },{
        "name":"manoj",
        "department":"EEE"
      },{
        "name":"mohan",
        "department":"CIVIL"
      },{
        "name":"surya",
        "department":"IT"
      }
    ];
  }

}
