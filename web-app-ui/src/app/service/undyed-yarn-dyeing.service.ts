import { UndyedYarnDyeing } from './../model/undyed-yarn-dyeing';
import { AppConfig } from './../config/app.config';
import { DyeingOrderReceived } from './../model/dyeing-order-received';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable()
export class UndyedYarnDyeingService {

  private headers: HttpHeaders;
  private saveUYDFormUrl: string;
  private findByUYDIdUrl: string;
  private deleteUYDUrl: string;

  uydFormSaved = new EventEmitter<boolean>();
  uydFormAction = new EventEmitter<UndyedYarnDyeing>();

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {
    this.saveUYDFormUrl = AppConfig.endpoints.saveUYDForm;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  saveUYDForm(undyedYarnDyeing: UndyedYarnDyeing): Observable<UndyedYarnDyeing> {
    this.headers.append('X-Auth-Token', localStorage.getItem('secureToken'));
    return this.http
      .post(this.saveUYDFormUrl, undyedYarnDyeing, { headers: this.headers }).pipe(
        map(response => {
          this.showSnackBar('Form Saved');
          return response;
        }),
        catchError(error => this.handleError(error)));
  }

  findByUYDId(uydId: number): Observable<UndyedYarnDyeing> {
    this.headers.append('X-Auth-Token', localStorage.getItem('secureToken'));
    return this.http
      .post(this.findByUYDIdUrl, uydId, { headers: this.headers }).pipe(
        map(response => {
          return response;
        }),
        catchError(error => this.handleError(error)));
  }

  deleteUYD(uydId: number[]) {
    this.headers.append('X-Auth-Token', localStorage.getItem('secureToken'));
    return this.http
      .post(this.deleteUYDUrl, uydId, { headers: this.headers }).pipe(
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
