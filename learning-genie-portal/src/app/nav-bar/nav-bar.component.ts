import { Router } from '@angular/router';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
@Injectable()
export class NavBarComponent implements OnInit {
  myStorage: Storage = localStorage;
  constructor(private router: Router) { }
  logOut() {
    localStorage.clear();
    this.router.navigate(['']);
  }
  ngOnInit() {
  }
}
