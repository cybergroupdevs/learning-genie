import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users;
  constructor(private usersService: UsersService) { }
  initUsers() {
    this.usersService.getUsers().subscribe(data => {
      this.users = data.users;
    });
  }
  ansUsers(_id) {
  }
  ngOnInit() {
    this.initUsers();
  }

}
