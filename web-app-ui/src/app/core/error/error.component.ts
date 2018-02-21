import { Component, OnInit } from '@angular/core';

import {ErrorService} from '../../service/error.service';
import {Error} from '../../model/error';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  /**
   * @type Error
   */
  error: Error;

  /**
   * @type {string}
   */
  display = 'none';

  /**
   * Constructor for ErrorComponent class
   * @param errorService
   */
  constructor(private errorService: ErrorService) {}

  /**
   * @description set display none
   */
  onErrorHandled() {
      this.display = 'none';
  }

  /**
   * @override handle error id any
   */
  ngOnInit() {
      this.errorService.errorOccurred
          .subscribe(
              (error: Error) => {
                  this.error = error;
                  this.display = 'block';
              }
          );
  }
}
