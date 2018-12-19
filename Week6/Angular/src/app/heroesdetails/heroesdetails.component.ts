import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { HeroesService } from "../superheroes/heroes.service";

@Component({
  selector: 'app-heroesdetails',
  templateUrl: './heroesdetails.component.html',
  styleUrls: ['./heroesdetails.component.css']
})
export class HeroesdetailsComponent implements OnInit {
  data:any;
  constructor(private route:ActivatedRoute,private proinfo:HeroesService,private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.data = this.proinfo.getheroesdatabyid(+params.get('id'));
      console.log(this.data);
      if(this.data == undefined){
        this.router.navigate(['/Superheroes']);
      }
    });
  }
}
