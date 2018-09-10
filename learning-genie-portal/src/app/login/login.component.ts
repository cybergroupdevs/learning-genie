import { NavBarComponent } from './../nav-bar/nav-bar.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import axios from 'axios';
import * as devEnv from '../../environments/environment';
import * as prodEnv from '../../environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private navbar: NavBarComponent, private http: HttpClient) { }
  url = (devEnv.environment.production === false ? devEnv.environment.url : prodEnv.environment.url);
  isLoginVisible = true;
  isContinueVisible = false;
  win;
  authwin;
  cookie;
  loginSubmit(f): void {
    this.win = window.open(this.url + 'login', '_blanks');
      this.isLoginVisible = false;
      this.isContinueVisible = true;
  }
  continue(f): void {
   window.addEventListener('message', (e) => {
         alert(e.data);
      }, false);
    axios.get(this.url + 'getuser', {withCredentials: true}
  ).then((resp) => {
    localStorage.setItem('id_token', resp.data.token);
    localStorage.setItem('isAdmin', resp.data.isAdmin);
    this.checkLogin();
   });
  }
  checkLogin() {
    if (localStorage.getItem('isAdmin') === 'true') {
      this.router.navigate(['dashboard']);
    } else {
      alert('Login With an Admin Account');
      this.isLoginVisible = true;
      this.isContinueVisible = false;
    }
  }
  ngOnInit() {
    this.checkLogin();
  }
}
