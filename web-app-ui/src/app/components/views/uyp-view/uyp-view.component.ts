import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { UndyedYarnPurchase } from '../../../model/undyed-yarn-purchase';

import { ErrorService } from '../../../service/error.service';
import { LoggerService } from '../../../core/logger.service';
import { ViewService } from '../../../service/view.service';

@Component({
  selector: 'app-uyp-view',
  templateUrl: './uyp-view.component.html',
  styleUrls: ['./uyp-view.component.css']
})
export class UypViewComponent implements OnInit {

  uypView: UndyedYarnPurchase[];

  maxSize = 5;
  bigTotalItems = 175;
  bigCurrentPage = 1;
  totalItems = 10;
  numPages = 0;
  p = 1;

  constructor(
    private errorService: ErrorService,
    private viewService: ViewService

  ) { }

  ngOnInit() {
    this.loadUYPDetails();
  }

  loadUYPDetails() {
    this.viewService.findAllUYP().subscribe((data) => {
      this.uypView = data;
      LoggerService.log(this.uypView);

    }, (error: Response) => {
      LoggerService.error('Login Error', error);
      this.logError(error);
   });
  }

  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }

          /**
     * @description handle error
     * @param error
     */
    logError = function(error) {
      this.errorService.handleError(error);
  };
}
