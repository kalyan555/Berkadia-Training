import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HeroesService } from './Superheroes/heroes.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private logged:HeroesService,private router:Router ){}
  canActivate():boolean {
    if(this.logged.logged() == "true"){
      console.log(this.logged.logged());
      return true;
    }
    else{
      this.router.navigate(['']);
      alert("Please Login!");
      return false;
    }
  }
}
