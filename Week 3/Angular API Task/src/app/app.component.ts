import { Component } from '@angular/core';
import {MyServiceService} from './my-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public key:String="";

  name:string;
  picturefront:string="";
  pictureback:string="";
  ability:string[]=[];
  height:number=0;
  //allmoves:string[]=[];
  types:string[]=[];

  count=0;
  constructor(private service:MyServiceService){}
  title = 'ApiTask';
  x:any;
  send(){
    if(this.key!=""){
    this.service.sendPostRequest(this.key.toLowerCase()).subscribe((res:any)=>{

    console.log(res);
    this.ability=[];
    //this.allmoves=[];
    this.types=[];
    this.name=res.name;
    this.picturefront=res.sprites.front_default;
    this.pictureback=res.sprites.back_default;
    this.height=res.height;
    res.abilities.forEach(element => {
      this.ability.push(element.ability.name);
    });
    // res.moves.forEach(element => {
    //   this.allmoves.push(element.move.name);
    // });
    res.types.forEach(element => {
      this.types.push(element.type.name);
    });
    //this.allmoves.splice(5);
    this.key=""; 
    
    document.getElementById('pokedex').style.display="";
    document.getElementById('heading').innerHTML="Details are:";            
    },
    (error) =>{
      console.log(error) 
      document.getElementById('heading').innerHTML="Pokemon not found / Server unable to handle"; 
      document.getElementById('pokedex').style.display="none";
    }
  );

  }


}
}
