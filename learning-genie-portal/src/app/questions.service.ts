import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as devEnv from '../environments/environment';
import * as prodEnv from '../environments/environment.prod';

const url = (devEnv.environment.production === false ? devEnv.environment.url : prodEnv.environment.url);
let token = localStorage.getItem('id_token');
if (!token) {
  token = '';
}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'x-auth': token
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
  getQuestionsData(id): Observable<any> {
    return this.http.get(url + 'questionsdata/' + id, httpOptions).map(resp => resp);
  }
}
