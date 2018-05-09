import { Injectable, EventEmitter } from '@angular/core';
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
  private logoutUrl: string;

  role: string;

  userLoggedIn = new EventEmitter<boolean>();

  constructor(private http: HttpClient) {
    this.loginUrl = AppConfig.endpoints.login;
    this.logoutUrl = AppConfig.endpoints.logout;
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
   }

  private handleError(error: any) {
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'backend server error');
    }
    return Observable.throw(error || 'backend server error');
  }

  login(user: User): Observable<User> {
    return this.http
    .post(this.loginUrl, user, {headers: this.headers}).pipe(
      map(response => {
        console.log(response);
        this.userLoggedIn.emit(true);
        return response;
      }),
   catchError(error => this.handleError(error))); }

   logout(): Observable<boolean> {
     if (this.isLoggedIn()) {
     const localHeader =  new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Auth-Token': localStorage.getItem('secureToken')
    });
    this.userLoggedIn.emit(false);
    return this.http.get(this.logoutUrl, {headers: localHeader}).pipe(
      map(response => {
        console.log(response);
        return response;
      }),
   catchError(error => this.handleError(error)));
    } else {
      return new Observable<false>();
    }
  }

     /**
     * @name isLoggedIn check user login
     * @returns {boolean}
     */
    isLoggedIn(): boolean {
      // TODO check is user looged in and return
      return localStorage.getItem('secureToken') !== null;
  }

}
