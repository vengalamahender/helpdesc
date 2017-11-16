import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private router:Router,private user:LoginService) { }

  ngOnInit() {
  }
loginUser(e){
	e.preventDefault();
	console.log(e);
	var username = e.target.elements[0].value;
	var password = e.target.elements[1].value;

if(username=='admin' && password == 'admin')
this.user.setUserLoggedIn();
this.router.navigate(['dashboard']);
	}
}
