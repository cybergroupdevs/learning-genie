import { UsersService } from './../users.service';
import { TeamsService } from './../teams.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams;
  users;
  id = 'chart1';
  width = 600;
  height = 400;
  type = 'pie3d';
  dataFormat = 'json';
  dataSource;
  title = 'Learning Genie';
  constructor(private teamsService: TeamsService, private usersService: UsersService, private modalService: NgbModal) {
  }
  initTeams() {
    this.teamsService.getTeams().subscribe(data => {
      this.teams = data.teams;
    });
  }
  viewUsers(index, content) {
    this.teamsService.getTeam(this.teams[index]._id).subscribe((data) => {
      this.users = data;
      this.modalService.open(content, { size: 'lg' });
    });
  }

  removeUser(index) {
    const data = {
      
    };
    this.usersService.removeTeam(index, data);
  }

  makegraph(index, graphs) {
    // this.usersService.getUsersData(this.users[index]._id).subscribe((data) => {
    //   this.dataSource = {
    //     'chart': {
    //       'caption': 'Learning Genie',
    //         'subCaption': 'Answers',
    //         'showlegend': '1',
    //         'showpercentvalues': '1',
    //         'showpercentintooltip': '0',
    //       'theme': 'fint'
    //     },
    //     'data': [
    //       {
    //         'label': 'Incorrect',
    //         'value': data.inCorrect
    //       },
    //       {
    //         'label': 'Correct',
    //         'value': data.correct
    //       },
    //       {
    //         'label': 'Not Answered',
    //         'value': data.notAnswered
    //       }
    //     ]
    //   };
    //   this.modalService.open(graphs, { size: 'lg' });
    // });
  }
  ngOnInit() {
    this.initTeams();
  }

}
