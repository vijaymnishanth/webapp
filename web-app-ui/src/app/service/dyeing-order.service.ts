import { DyeingOrderReceived } from './../model/dyeing-order-received';
import { DyeingOrder } from './../model/dyeing-order';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

import { AppConfig } from '../config/app.config';

@Injectable()
export class DyeingOrderService {

  private headers: HttpHeaders;
  private saveDORFormUrl: string;
  private findSumOfDORUrl: string;
  private deleteDORUrl: string;
  private saveDOUrl: string;
  private deleteDOUrl: string;
  private countOfDORUrl: string;

  dorFormSaved = new EventEmitter<boolean>();
  dyeingOrderFormSaved = new EventEmitter<boolean>();
  dorFormAction = new EventEmitter<DyeingOrderReceived>();
  doFormAction = new EventEmitter<DyeingOrder>();
  dyeingOrder: DyeingOrder;

  doSaveType: string;

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {
    this.saveDORFormUrl = AppConfig.endpoints.saveDORForm;
    this.findSumOfDORUrl = AppConfig.endpoints.findSumOfDOR;
    this.deleteDORUrl = AppConfig.endpoints.deleteDOR;
    this.saveDOUrl = AppConfig.endpoints.saveDyeingOrder;
    this.deleteDOUrl = AppConfig.endpoints.deleteDyeingOrder;
    this.countOfDORUrl = AppConfig.endpoints.countOfDOR;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Auth-Token': localStorage.getItem('secureToken')
    });
  }

  saveDOForm(dyeingOrder: DyeingOrder): Observable<DyeingOrder> {
    return this.http
      .post(this.saveDOUrl, dyeingOrder, { headers: this.headers }).pipe(
        map(response => {
          this.showSnackBar('Form Saved');
          return response;
        }),
        catchError(error => this.handleError(error)));
  }

  saveDORForm(dyeingOrderReceived: DyeingOrderReceived): Observable<DyeingOrderReceived[]> {
    return this.http
      .post(this.saveDORFormUrl, dyeingOrderReceived, { headers: this.headers }).pipe(
        map(response => {
          this.dorFormSaved.emit(true);
          this.showSnackBar('Form Saved');
          return response;
        }),
        catchError(error => this.handleError(error)));
  }

  findSumOfDOR(dyeingOrderId: number): Observable<number> {
    return this.http
      .post(this.findSumOfDORUrl, dyeingOrderId, { headers: this.headers }).pipe(
        map(response => {
          return response;
        }),
        catchError(error => this.handleError(error)));
  }

  deleteDOR(dorId: number[]) {
    return this.http
      .post(this.deleteDORUrl, dorId, { headers: this.headers }).pipe(
        map(response => {
          this.showSnackBar('Deleted ' + dorId.length + ' record');
        }),
        catchError(error => this.handleError(error)));
  }

  deleteDyeingOrder(dyeingOrderId: number[]) {
    return this.http
      .post(this.deleteDOUrl, dyeingOrderId, { headers: this.headers }).pipe(
        map(response => {
          this.showSnackBar('Deleted ' + dyeingOrderId.length + ' record');
        }),
        catchError(error => this.handleError(error)));
  }

  countOfDOR(dyeingOrderId: number[]): Observable<number> {
    return this.http
      .post(this.countOfDORUrl, dyeingOrderId, { headers: this.headers }).pipe(
        map(response => {
          return response;
        }),
        catchError(error => this.handleError(error)));
  }

  private handleError(error: any) {
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'backend server error');
    }
    return Observable.throw(error || 'backend server error');
  }

  showSnackBar(name): void {
    const config: any = new MatSnackBarConfig();
    config.duration = AppConfig.snackBarDuration;
    this.snackBar.open(name, 'OK', config);
  }
}
