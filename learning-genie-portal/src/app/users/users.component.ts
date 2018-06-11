import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
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
  id = 'chart1';
  width = 600;
  height = 400;
  type = 'pie3d';
  dataFormat = 'json';
  dataSource;
  title = 'Learning Genie';
  constructor(private usersService: UsersService, private modalService: NgbModal) {
  }
  initUsers() {
    this.usersService.getUsers().subscribe(data => {
      this.users = data.users;
    });
  }
  ansUsers(index, content) {
    this.usersService.getAnswers(this.users[index]._id).subscribe((data) => {
      this.ansOfUser = data;
      this.modalService.open(content, { size: 'lg' });
    });
  }
  makegraph(index, graphs) {
    this.usersService.getUsersData(this.users[index]._id).subscribe((data) => {
      this.dataSource = {
        'chart': {
          'caption': 'Learning Genie',
            'subCaption': 'Answers',
            'showlegend': '1',
            'showpercentvalues': '1',
            'showpercentintooltip': '0',
          'theme': 'fint'
        },
        'data': [
          {
            'label': 'Incorrect',
            'value': data.inCorrect
          },
          {
            'label': 'Correct',
            'value': data.correct
          },
          {
            'label': 'Not Answered',
            'value': data.notAnswered
          }
        ]
      };
      this.modalService.open(graphs, { size: 'lg' });
    });
  }
  ngOnInit() {
    this.initUsers();
  }
}
