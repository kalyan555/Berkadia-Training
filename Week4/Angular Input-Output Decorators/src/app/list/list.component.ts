import { Component, OnInit, Input,Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
      @Input() laptops:string[];
      @Output() valueChange = new EventEmitter<number>();
      count=0;
      constructor() { }

      ngOnInit() {
      }

      counter(){
      this.count++;
      // console.log(this.count);
      this.valueChange.emit(this.count);
   }
}
