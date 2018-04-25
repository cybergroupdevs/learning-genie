import { QuestionsService } from './../questions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionsadmin',
  templateUrl: './questionsadmin.component.html',
  styleUrls: ['./questionsadmin.component.css']
})
export class QuestionsadminComponent implements OnInit {
  isQuesAdd = false;
  isQuesVisible = false;
  questions;
  edit_Ques;
  add_Ques;
  constructor(private questionsService: QuestionsService) { }
  addQuesBtn() {
    this.isQuesAdd = !this.isQuesAdd;
    this.isQuesVisible = true;
    this.add_Ques = {
      ques: null,
      team: null
    };
  }
  ansQuesBtn(index) {
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
    };
    this.questionsService.postQuestion(data).subscribe((resp) => {
      alert(JSON.stringify(resp));
      this.quesInit();
      this.isQuesAdd = false;
      this.isQuesVisible = false;
    });
  }
  ngOnInit() {
    this.quesInit();
  }

}
