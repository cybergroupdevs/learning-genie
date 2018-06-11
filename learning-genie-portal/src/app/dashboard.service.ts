import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
const url = 'https://learning-genie777.herokuapp.com/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'x-auth':  localStorage.getItem('id_token')
  })
};

@Injectable()
export class DashboardService {

  constructor(private http: HttpClient) { }
  getGraphData(): Observable<any> {
    return this.http.get(url + 'dashdata', httpOptions).map( resp => resp);
  }
}
