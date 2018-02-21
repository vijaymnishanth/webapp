import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import {UndyedYarnPurchase} from '../model/undyed-yarn-purchase';

import {AppConfig} from '../config/app.config';
@Injectable()
export class FormService {

  private headers: HttpHeaders;
  private saveUYPUrl: string;

  constructor(private http: HttpClient) {
    this.saveUYPUrl = AppConfig.endpoints.saveUYP;
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
   }

   private handleError(error: any) {
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'backend server error');
    }
    return Observable.throw(error || 'backend server error');
  }

  saveUYPForm(undyedYarnPurchase: UndyedYarnPurchase): Observable<UndyedYarnPurchase> {

    return this.http
    .post(this.saveUYPUrl + '?token=' + localStorage.getItem('secureToken')  , undyedYarnPurchase, {headers: this.headers}).pipe(
      map(response => {
        console.log(response);
        return response;
      }),
   catchError(error => this.handleError(error)));
  }

}
