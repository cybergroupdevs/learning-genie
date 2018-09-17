import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { QuestionsService } from './../questions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionsadmin',
  templateUrl: './questionsadmin.component.html',
  styleUrls: ['./questionsadmin.component.css']
})
export class QuestionsadminComponent implements OnInit {
  teams = [{id: '1', teamName: 'cygrp'}, {id: '2', teamName: 'india'}];
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
  constructor(private questionsService: QuestionsService, private modalService: NgbModal) { }
  addQuesBtn() {
    this.isQuesAdd = !this.isQuesAdd;
    this.isQuesVisible = true;
    this.add_Ques = {
      ques: null,
      team: null,
      keys: null
    };
  }
  ansQuesBtn(index, content) {
    this.questionsService.getAnswers(this.questions[index]._id).subscribe((data) => {
      this.ansOfQues = data;
      this.modalService.open(content, { size: 'lg' });
    });
  }
  quesInit() {
    this.questionsService.getQuestions().subscribe((data) => {
      this.questions = data.questions;
    });
  }
  addQues() {
    let data = {
      'ques': this.add_Ques.ques,
      'team': this.add_Ques.team,
      'keys': this.add_Ques.keys,
    };
    this.questionsService.postQuestion(data).subscribe((resp) => {
      alert(JSON.stringify(resp));
      this.quesInit();
      this.isQuesAdd = false;
      this.isQuesVisible = false;
    });
  }
  makegraph(index, graphs) {
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
    });
  }
  ngOnInit() {
    this.quesInit();
  }

}
