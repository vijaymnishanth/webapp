import { DyeingOrderReceived } from './../model/dyeing-order-received';
import { DyeingOrder } from './../model/dyeing-order';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import {UndyedYarnPurchase} from '../model/undyed-yarn-purchase';
import {AppConfig} from '../config/app.config';
@Injectable()
export class ViewService {

  private headers: HttpHeaders;
  private findAllUYPUrl: string;
  private findAllDOUrl: string;
  private findDORByDOIdUrl: string;

  constructor(private http: HttpClient) {
    this.findAllUYPUrl = AppConfig.endpoints.findAllUYP;
    this.findAllDOUrl = AppConfig.endpoints.findAllDyeingOrder;
    this.findDORByDOIdUrl = AppConfig.endpoints.findDORByDOId;
    this.headers = new HttpHeaders({'Content-Type': 'application/json',
    'X-Auth-Token': localStorage.getItem('secureToken')
  });
   }

  private handleError(error: any) {
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'backend server error');
    }
    return Observable.throw(error || 'backend server error');
  }

  findAllUYP(): Observable<UndyedYarnPurchase[]> {
    return this.http
    .get(this.findAllUYPUrl , {headers: this.headers}).pipe(
      map(response => {
        return response;
      }),
   catchError(error => this.handleError(error)));
  }

  findAllDyeingOrder(): Observable<DyeingOrder[]> {
    return this.http
    .get(this.findAllDOUrl , {headers: this.headers}).pipe(
      map(response => {
        return response;
      }),
   catchError(error => this.handleError(error)));
  }

  findDORByDOId(dyeingOrderId: number): Observable<DyeingOrderReceived[]> {
    return this.http
    .post(this.findDORByDOIdUrl , dyeingOrderId, {headers: this.headers}).pipe(
      map(response => {
        return response;
      }),
   catchError(error => this.handleError(error)));
  }
}
