import { Component, OnInit } from '@angular/core';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.css']
})
export class SuperheroesComponent implements OnInit {

  data:any[];
  constructor(private readonly heroes:HeroesService) { }

  ngOnInit() {
    this.data=this.heroes.getheroesdata();
  }

}
