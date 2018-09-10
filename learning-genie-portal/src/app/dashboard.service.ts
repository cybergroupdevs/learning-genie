import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as devEnv from '../environments/environment';
import * as prodEnv from '../environments/environment.prod';

const url = (devEnv.environment.production === false ? devEnv.environment.url : prodEnv.environment.url);
let token = localStorage.getItem('id_token').toString();
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
export class DashboardService {

  constructor(private http: HttpClient) { }
  getGraphData(): Observable<any> {
    return this.http.get(url + 'dashdata', httpOptions).map( resp => resp);
  }
}
