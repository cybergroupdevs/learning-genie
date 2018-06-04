import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users;
  ansOfUser;
  constructor(private usersService: UsersService, private modalService: NgbModal) { }
  initUsers() {
    this.usersService.getUsers().subscribe(data => {
      this.users = data.users;
    });
  }
  ansUsers(index, content) {
    this.usersService.getAnswers(this.users[index]._id).subscribe((data) => {
      this.ansOfUser = data;
      this.modalService.open(content, { size: 'lg' });
      // alert(JSON.stringify(data, null, 2));
    });
  }
  ngOnInit() {
    this.initUsers();
  }

}
