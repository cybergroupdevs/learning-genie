import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const url = 'https://learning-genie777.herokuapp.com/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'x-auth': localStorage.getItem('id_token')
  })
};
@Injectable()
export class QuestionsService {
  error;
  constructor(private http: HttpClient) { }
  getQuestions(): Observable<any> {
    return this.http.get(url + 'questions', httpOptions).map(resp => resp);
  }
  getAnswers(id): Observable<any> {
    return this.http.get(url + 'questions/' + id, httpOptions).map(resp => resp);
  }
  postQuestion(data) {
    return this.http.post(url + 'question', data, httpOptions).map(resp => resp = resp['message']);
  }
}
