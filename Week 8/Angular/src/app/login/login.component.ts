import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMsg: any;

  constructor(private readonly router:Router,private readonly _login:LoginService) { }
  username="";
  password="";
  result;
  user;
  ngOnInit() {
    document.body.classList.add('bg-img');
    if(localStorage.getItem('logged')=='true'){
      this.router.navigate(['/Home']);
    }        
  }
  goToHome(){
    this._login.login(this.username,this.password).subscribe((res:any)=>{
      //console.log(res);
      this.user=res.users[0].username;
      this.result=res.users.length;
      if(this.result==1){
        console.log("Authentication Successfull")
        localStorage.setItem('logged','true');
        localStorage.setItem('username',this.user);
        this.router.navigate(['/Home']);
      }
      else {
        this.errorMsg="Invalid Credentials"
      }
    });


}

}
