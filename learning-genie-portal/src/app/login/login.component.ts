import { NavBarComponent } from './../nav-bar/nav-bar.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private navbar: NavBarComponent, private http: HttpClient) { }
  url = 'https://warm-savannah-20783.herokuapp.com/';
  isLoginVisible = true;
  isContinueVisible = false;
  win;
  loginSubmit(f): void {
    //this.win = window.open(this.url + 'login');
      this.http.get(this.url + 'login');
      this.isLoginVisible = false;
      this.isContinueVisible = true;
  }
  continue(f): void {
   this.http.get(this.url + 'getuser').map(resp => resp).subscribe((resp) => {
      localStorage.setItem('id_token', resp['token']);
      localStorage.setItem('id_token', resp['isAdmin']);
   });
  }
  checkLogin() {
    if (localStorage.getItem('isAdmin')) {
      this.router.navigate(['questions']);
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
