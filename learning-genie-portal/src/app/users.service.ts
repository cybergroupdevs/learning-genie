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
export class UsersService {
  constructor(private http: HttpClient) { }
  getUsers(): Observable<any> {
    return this.http.get(url + 'users', httpOptions).map( resp => resp);
  }
  getAnswers(id): Observable<any> {
    return this.http.get(url + 'users/' + id, httpOptions).map(resp => resp);
  }
  getUsersData(id): Observable<any> {
    return this.http.get(url + 'usersdata/' + id, httpOptions).map(resp => resp);
  }
}
