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
    'x-auth':  token
  })
};

@Injectable()
export class TeamsService {
  constructor(private http: HttpClient) { }
  getTeams(): Observable<any> {
    return this.http.get(url + 'teams', httpOptions).map( resp => resp);
  }
  getTeam(id): Observable<any> {
    return this.http.get(url + 'team/' + id, httpOptions).map( resp => resp);
  }
  postTeam(data): Observable<any> {
    return this.http.post(url + 'team', data, httpOptions).map(resp => resp = resp['message']);
  }
  patchTeam(id, data): Observable<any> {
    return this.http.patch(url + 'team/' + id, data, httpOptions).map(resp => resp = resp['message']);
  }
}
