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
  url = 'https://learning-genie777.herokuapp.com/';
  isLoginVisible = true;
  isContinueVisible = false;
  win;
  authwin;
  cookie;
  loginSubmit(f): void {
    this.win = window.open(this.url + 'login', 'theFrame');
    this.authwin = document.getElementById('theFrame');
    this.authwin.hidden = false;
      this.isLoginVisible = false;
      this.isContinueVisible = true;
  }
  continue(f): void {
   window.addEventListener('message', (e) => {
         alert(e.data);
      }, false);
   this.http.get(this.url + 'getuser').map(resp => resp).subscribe((resp) => {
     console.log(JSON.stringify(resp, null, 2));
   });
   localStorage.setItem('id_token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkZTaW11RnJGTm9DMHNKWEdtdjEzbk5aY2VEYyIsImtpZCI6IkZTaW11RnJGTm9DMHNKWEdtdjEzbk5aY2VEYyJ9.eyJhdWQiOiIwMDQ2NjQxNC03OGNiLTQ2ZjktYThmNy0zYTM2NmI1MjI5M2UiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC85NGE3NmJiMS02MTFiLTRlYjUtYWVlNS1lMzEyMzgxYzMyY2IvIiwiaWF0IjoxNTI0MTI5OTM5LCJuYmYiOjE1MjQxMjk5MzksImV4cCI6MTUyNDEzMzgzOSwiYWlvIjoiWTJkZ1lGQVQ0NTJhdHVWMDMybWZDTkVyTEFiN1hHMTJ1bk1hYnVQVmJ6L1BZL3N1VUJvQSIsImFtciI6WyJwd2QiXSwiZmFtaWx5X25hbWUiOiJjaGF3bGEiLCJnaXZlbl9uYW1lIjoiQW5raXQiLCJpcGFkZHIiOiIxODIuNzUuMTI5LjE5NCIsIm5hbWUiOiJBbmtpdCBjaGF3bGEiLCJvaWQiOiI0ZDM5ZjdhMy04ZjZhLTRiYTItYmU0My1jMDEwZmJmZTJmMDkiLCJzdWIiOiJFdnJFMkEzRk5NTl9aS1REanNWdl9URGU1dzhsN1Bpc3NtMWRRQnFLZWNBIiwidGlkIjoiOTRhNzZiYjEtNjExYi00ZWI1LWFlZTUtZTMxMjM4MWMzMmNiIiwidW5pcXVlX25hbWUiOiJhbmtpdC5jaGF3bGFAY3lncnAuY29tIiwidXBuIjoiYW5raXQuY2hhd2xhQGN5Z3JwLmNvbSIsInV0aSI6Inpaa3lRdm9MN1VHMi16dFpPQjF0QUEiLCJ2ZXIiOiIxLjAifQ.FUNH-OlROEwqc3NqAsQBzs8X8oFZQizxGzBdQE9sgFI17gafUp6NE-R-UQCtkpy8fFy_S9lShbC5QNmKuDo3fyUiNE73LXYem_zkm8gof9rDgcsDLFEVgNHdBaR-DjnAADew3xkB2tpU4qzvZdXW6ki_POzMeJZwdqnRW4rWgGuxeu0dsmyuyJnQMTNRX_bkO-4rP3daMMHOIL_SxVHh3q823adH5FlUqr1LiJN08alSg6Z40i81M2E-m9PQIb_uYyGi5XBcGL9RBHt64X9j29iDl5mmM9LS4vp8K-PKcRaZFOehY2jv5lkDD02MHH-gSEMa8VhHNmbDL6RMzdMIYQ');
   localStorage.setItem('isAdmin', 'true');
   //this.checkLogin();
  }
  checkLogin() {
    if (localStorage.getItem('isAdmin')) {
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
