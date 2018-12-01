import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {

  result=0;
  laptops:string[]=["lenovo ideapad 310",
  "Lenovo ideapad 320",
  "Dell alienware 15",
  "Lenovo ideapad 330",
  "Dell alienware 19",
  "Asus rog 15",
 " Dell alienware 17",
  "Asus rog 17",
  "Acer predator 17"]

  displayCounter(count) {
    console.log(count);
    this.result=count;
}
  constructor() { }
  

  ngOnInit() {
  }

}
