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
  tindex;
  ShowSpinner = false;
  constructor(private teamsService: TeamsService, private usersService: UsersService, private modalService: NgbModal) {
  }
  initTeams() {
    this.ShowSpinner = true;
    this.teamsService.getTeams().subscribe(data => {
      this.teams = data.teams;
      this.ShowSpinner = false;
    });
  }
  viewUsers(index, content) {
    this.ShowSpinner = true;
    this.teamsService.getTeam(this.teams[index]._id).subscribe((data) => {
      this.users = data;
      this.tindex = index;
      this.modalService.open(content, { size: 'lg' });
      this.ShowSpinner = false;
    });
  }
  removeUser(index) {
    this.ShowSpinner = true;
    this.usersService.removeTeam(this.users[index]._id, this.teams[this.tindex]._id).subscribe((resp) => {
        this.teamsService.getTeam(this.teams[this.tindex]._id).subscribe((data) => {
        this.users = data;
        this.ShowSpinner = false;
      });
    });
  }
  addMemeber(index, content) {
    this.ShowSpinner = true;
    this.teamsService.getNonMembers(this.teams[index]._id).subscribe((data) => {
      this.users = data;
      this.tindex = index;
      this.modalService.open(content, { size: 'lg' });
      this.ShowSpinner = false;
    });
  }
  addUser(index) {
    this.ShowSpinner = true;
    this.usersService.addTeam(this.users[index]._id, this.teams[this.tindex]._id).subscribe((resp) => {
      this.teamsService.getNonMembers(this.teams[this.tindex]._id).subscribe((data) => {
      this.users = data;
      this.ShowSpinner = false;
    });
  });
  }
  makegraph(index, graphs) {
    this.ShowSpinner = true;
    this.teamsService.getTeamData(this.teams[index]._id).subscribe((data) => {
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
      this.ShowSpinner = false;
    });
  }
  ngOnInit() {
    this.initTeams();
  }

}
