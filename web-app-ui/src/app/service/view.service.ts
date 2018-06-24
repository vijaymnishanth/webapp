import { DyeingOrderSummary } from './../model/dyeing-order-summary';
import { DyeingOrderReceived } from './../model/dyeing-order-received';
import { DyeingOrder } from './../model/dyeing-order';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import {UndyedYarnPurchase} from '../model/undyed-yarn-purchase';
import {AppConfig} from '../config/app.config';
import { UndyedYarnDyeing } from '../model/undyed-yarn-dyeing';
@Injectable()
export class ViewService {

  private headers: HttpHeaders;
  private findAllUYPUrl: string;
  private findAllDOUrl: string;
  private findAllDOSummaryUrl: string;
  private findDORByDOIdUrl: string;
  private findAllUYDUrl: string;

  constructor(private http: HttpClient) {
    this.findAllUYPUrl = AppConfig.endpoints.findAllUYP;
    this.findAllDOUrl = AppConfig.endpoints.findAllDyeingOrder;
    this.findAllDOSummaryUrl = AppConfig.endpoints.findAllDyeingOrderSummary;
    this.findDORByDOIdUrl = AppConfig.endpoints.findDORByDOId;
    this.findAllUYDUrl = AppConfig.endpoints.findAllUYD;
    this.headers = new HttpHeaders({'Content-Type': 'application/json'
  });
   }

  private handleError(error: any) {
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'backend server error');
    }
    return Observable.throw(error || 'backend server error');
  }

  findAllUYP(): Observable<UndyedYarnPurchase[]> {
    this.headers.append('X-Auth-Token', localStorage.getItem('secureToken'));
    return this.http
    .get(this.findAllUYPUrl , {headers: this.headers}).pipe(
      map(response => {
        return response;
      }),
   catchError(error => this.handleError(error)));
  }

  findAllDyeingOrder(): Observable<DyeingOrder[]> {
    this.headers.append('X-Auth-Token', localStorage.getItem('secureToken'));
    return this.http
    .get(this.findAllDOUrl , {headers: this.headers}).pipe(
      map(response => {
        return response;
      }),
   catchError(error => this.handleError(error)));
  }

  findAllDyeingOrderSummary(): Observable<DyeingOrderSummary[]> {
    this.headers.append('X-Auth-Token', localStorage.getItem('secureToken'));
    return this.http
    .get(this.findAllDOSummaryUrl , {headers: this.headers}).pipe(
      map(response => {
        return response;
      }),
   catchError(error => this.handleError(error)));
  }

  findDORByDOId(dyeingOrderId: number): Observable<DyeingOrderReceived[]> {
    this.headers.append('X-Auth-Token', localStorage.getItem('secureToken'));
    return this.http
    .post(this.findDORByDOIdUrl , dyeingOrderId, {headers: this.headers}).pipe(
      map(response => {
        return response;
      }),
   catchError(error => this.handleError(error)));
  }

  findAllUYD(): Observable<UndyedYarnDyeing[]> {
    this.headers.append('X-Auth-Token', localStorage.getItem('secureToken'));
    return this.http
    .get(this.findAllUYDUrl , {headers: this.headers}).pipe(
      map(response => {
        return response;
      }),
   catchError(error => this.handleError(error)));
  }
}
