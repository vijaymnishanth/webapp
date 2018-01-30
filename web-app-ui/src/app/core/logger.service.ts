import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  static log(data: any): void {
    console.log(data);
  }

  static error(msg: string, obj = {}): void {
    console.error(msg, obj);
  }
}
