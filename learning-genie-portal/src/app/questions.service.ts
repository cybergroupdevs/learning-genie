import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const url = 'https://warm-savannah-20783.herokuapp.com/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('id_token')
  })
};
@Injectable()
export class QuestionsService {
  error;
  constructor(private http: HttpClient) { }
  getQuestions(): Observable<any> {
    return this.http.get(url + 'questions', httpOptions).map(resp => resp);
  }
  postQuestion(data) {
    return this.http.post(url + 'question', data, httpOptions).map(resp => resp);
  }
}
