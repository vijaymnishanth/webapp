import { Injectable, EventEmitter } from '@angular/core';
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
  private findByUYPIdUrl: string;

  uypFormSaved = new EventEmitter<boolean>();
  uypFormAction = new EventEmitter<UndyedYarnPurchase>();

  constructor(private http: HttpClient) {
    this.saveUYPUrl = AppConfig.endpoints.saveUYP;
    this.findByUYPIdUrl = AppConfig.endpoints.findByUYPId;
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
        this.uypFormSaved.emit(true);
        return response;
      }),
   catchError(error => this.handleError(error)));
  }

  findByUYPId(uypId: number): Observable<UndyedYarnPurchase> {
    return this.http
    .post(this.findByUYPIdUrl + '?token=' + localStorage.getItem('secureToken')  , uypId, {headers: this.headers}).pipe(
      map(response => {
        return response;
      }),
   catchError(error => this.handleError(error)));
  }
}
