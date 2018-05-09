import { YarnType } from './../model/yarn-type';
import { DyeingOrderReceived } from './../model/dyeing-order-received';
import { Count } from './../model/count';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import 'rxjs/add/observable/throw';

import { UndyedYarnPurchase } from '../model/undyed-yarn-purchase';


import { AppConfig } from '../config/app.config';
import { Shade } from '../model/shade';
@Injectable()
export class FormService {

  private headers: HttpHeaders;
  private saveUYPUrl: string;
  private findByUYPIdUrl: string;
  private deleteUYPUrl: string;
  private searchByShadeNoUrl: string;
  private findAllCountUrl: string;
  private findAllYarnTypeUrl: string;

  uypFormSaved = new EventEmitter<boolean>();
  uypFormAction = new EventEmitter<UndyedYarnPurchase>();

  constructor(private http: HttpClient,
    private snackBar: MatSnackBar) {
    this.saveUYPUrl = AppConfig.endpoints.saveUYP;
    this.findByUYPIdUrl = AppConfig.endpoints.findByUYPId;
    this.deleteUYPUrl = AppConfig.endpoints.deleteUYP;
    this.searchByShadeNoUrl = AppConfig.endpoints.searchByShadeNo;
    this.findAllCountUrl = AppConfig.endpoints.findAllCount;
    this.findAllYarnTypeUrl = AppConfig.endpoints.findAllYarnType;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  private handleError(error: any) {
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'backend server error');
    }
    return Observable.throw(error || 'backend server error');
  }

  saveUYPForm(undyedYarnPurchase: UndyedYarnPurchase): Observable<UndyedYarnPurchase> {
    this.headers.append('X-Auth-Token', localStorage.getItem('secureToken'));
    return this.http
      .post(this.saveUYPUrl, undyedYarnPurchase, { headers: this.headers }).pipe(
        map(response => {
          // console.log(response);
          this.uypFormSaved.emit(true);
          this.showSnackBar('Form Saved');
          return response;
        }),
        catchError(error => this.handleError(error)));
  }

  findByUYPId(uypId: number): Observable<UndyedYarnPurchase> {
    this.headers.append('X-Auth-Token', localStorage.getItem('secureToken'));
    return this.http
      .post(this.findByUYPIdUrl, uypId, { headers: this.headers }).pipe(
        map(response => {
          return response;
        }),
        catchError(error => this.handleError(error)));
  }

  deleteUYP(uypId: number[]) {
    this.headers.append('X-Auth-Token', localStorage.getItem('secureToken'));
    return this.http
      .post(this.deleteUYPUrl, uypId, { headers: this.headers }).pipe(
        catchError(error => this.handleError(error)));
  }

  searchByShadeNo(shadeNo: String): Observable<Shade[]> {
    this.headers.append('X-Auth-Token', localStorage.getItem('secureToken'));
    return this.http
      .post(this.searchByShadeNoUrl, shadeNo, { headers: this.headers }).pipe(
        map(response => {
          // this.dyeingOrderFormSaved.emit(true);
          // this.showSnackBar('Form Saved');
          return response;
        }),
        catchError(error => this.handleError(error)));
  }

  findAllCount(): Observable<Count[]> {
    this.headers.append('X-Auth-Token', localStorage.getItem('secureToken'));
    return this.http
      .get(this.findAllCountUrl, { headers: this.headers }).pipe(
        map(response => {
          return response;
        }),
        catchError(error => this.handleError(error)));
  }

  findAllYarnType(): Observable<YarnType[]> {
    this.headers.append('X-Auth-Token', localStorage.getItem('secureToken'));
    return this.http
      .get(this.findAllYarnTypeUrl, { headers: this.headers }).pipe(
        map(response => {
          return response;
        }),
        catchError(error => this.handleError(error)));
  }

  showSnackBar(name): void {
    const config: any = new MatSnackBarConfig();
    config.duration = AppConfig.snackBarDuration;
    this.snackBar.open(name, 'OK', config);
  }

}
