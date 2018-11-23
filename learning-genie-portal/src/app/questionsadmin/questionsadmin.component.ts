import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { QuestionsService } from './../questions.service';
import { TeamsService } from './../teams.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionsadmin',
  templateUrl: './questionsadmin.component.html',
  styleUrls: ['./questionsadmin.component.css']
})
export class QuestionsadminComponent implements OnInit {
  teams;
  isQuesAdd = false;
  isQuesVisible = false;
  questions;
  edit_Ques;
  add_Ques;
  ansOfQues;
  id = 'chart1';
  width = 600;
  height = 400;
  type = 'pie3d';
  dataFormat = 'json';
  dataSource;
  title = 'Learning Genie';
  ShowSpinner = false;
  constructor(private teamsService: TeamsService, private questionsService: QuestionsService, private modalService: NgbModal) { }
  addQuesBtn() {
    this.ShowSpinner = true;
    this.isQuesAdd = !this.isQuesAdd;
    this.isQuesVisible = true;
    this.add_Ques = {
      ques: null,
      team: null,
      keys: null
    };
    this.ShowSpinner = false;
  }
  ansQuesBtn(index, content) {
    this.ShowSpinner = true;
    this.questionsService.getAnswers(this.questions[index]._id).subscribe((data) => {
      this.ansOfQues = data;
      this.modalService.open(content, { size: 'lg' });
      this.ShowSpinner = false;
    });
  }
  quesInit() {
    this.ShowSpinner = true;
    this.questionsService.getQuestions().subscribe((data) => {
      this.questions = data.questions;
      this.ShowSpinner = false;
    });
  }
  addQues() {
    this.ShowSpinner = true;
    const data = {
      'ques': this.add_Ques.ques,
      'team': this.add_Ques.team,
      'keys': this.add_Ques.keys,
    };
    this.questionsService.postQuestion(data).subscribe((resp) => {
      this.quesInit();
      this.isQuesAdd = false;
      this.isQuesVisible = false;
      this.ShowSpinner = false;
    });
  }
  makegraph(index, graphs) {
    this.ShowSpinner = true;
    this.questionsService.getQuestionsData(this.questions[index]._id).subscribe((data) => {
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
    this.ShowSpinner = true;
    this.quesInit();
    this.teamsService.getTeams().subscribe((data) => {
      this.teams = data.teams;
      this.ShowSpinner = false;
    });
  }
}
