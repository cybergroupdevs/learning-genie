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
      team: null,
      keys: null
    };
  }
  ansQuesBtn(index) {
    this.questionsService.getAnswers(this.questions[index]._id).subscribe((data) => {
      alert(JSON.stringify(data, null, 2));
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
  ngOnInit() {
    this.quesInit();
  }

}
