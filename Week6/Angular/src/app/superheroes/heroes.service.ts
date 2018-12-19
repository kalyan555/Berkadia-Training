import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HeroesService {
heroesdata:any[]=[
{
  'id':1,
  'image':'https://cdn.iconscout.com/icon/free/png-256/superman-dc-superhero-hero-justice-league-earth-saver-28701.png',
  'name':'Superman',
  'realname':'Clark Kent',
  'powers':'Super strength'
},
{
  'id':2,
  'image':'http://icons.iconarchive.com/icons/webalys/kameleon.pics/256/Batman-icon.png',
  'name':'Batman',
  'realname':'Bruce Wayne',
  'powers':'Rich'
},
{
  'id':3,
  'image':'https://cdn0.iconfinder.com/data/icons/superhero-2/256/Flash-128.png',
  'name':'Flash',
  'realname':'Barry Allen',
  'powers':'Super Speed'
},
{
  'id':4,
  'image':'https://cdn.iconscout.com/icon/free/png-256/ironman-marvel-super-hero-earth-saver-avenger-28699.png',
  'name':'Iron Man',
  'realname':'Tony Stark',
  'powers':'Higher Intelligence'
},
{
  'id':5,
  'image':'https://cdn.iconscout.com/icon/free/png-256/spiderman-marvel-super-hero-earth-saver-avenger-28702.png',
  'name':'Spider Man',
  'realname':'Peter Parked',
  'powers':'Web Swinging'
}
];
  constructor() {}
  getheroesdata(){
    return this.heroesdata;
  }
  getheroesdatabyid(id:number):any{
    return this.heroesdata.find(x => x.id == id);
  }
  logged(){
    return localStorage.getItem('logged');
  }
}
