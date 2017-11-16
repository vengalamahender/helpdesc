import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private myauthService: LoginService,private router:Router) {


   }

  ngOnInit() {
  console.log('Is user logged in?',this.myauthService.getUserLoggedIn());
  }
  goLogin(){
  this.router.navigate(['login']);
  }
  goHome(){
  this.router.navigate(['home']);
  }
  goAbout(){
  	this.router.navigate(['aboutus']);
  }
}
