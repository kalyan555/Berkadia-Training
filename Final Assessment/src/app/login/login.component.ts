import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private readonly router:Router) { }
  username;
  ngOnInit() {
    document.body.classList.add('bg-img');
    if(localStorage.getItem('logged')=='true'){
      this.router.navigate(['/Questions']);
    }        
  }
  startTest(){
    localStorage.setItem('logged','true');
    localStorage.setItem('username',this.username);
    this.router.navigate(['/Questions']);
  }
}
