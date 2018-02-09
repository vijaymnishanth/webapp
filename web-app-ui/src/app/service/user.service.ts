import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import {User} from '../model/user';

import {AppConfig} from '../config/app.config';

@Injectable()
export class UserService {

  private headers: HttpHeaders;
  private loginUrl: string;

  constructor(private http: HttpClient) {
    this.loginUrl = AppConfig.endpoints.login;
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
   }

  private handleError(error: any) {
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'backend server error');
    }
    return Observable.throw(error || 'backend server error');
  }

  login(user:User): Observable<User>{
    return this.http
    .post(this.loginUrl,user, {headers: this.headers}).pipe(
      map(response => {
        //console.log(response);
        return response;
      }),
   catchError(error => this.handleError(error)));}

       /**
     * @name isLoggedIn check user login
     * @returns {boolean}
     */
    isLoggedIn(): boolean {
      //TODO check is user looged in and return 
      return localStorage.getItem('userId') !== null;
  }

}
