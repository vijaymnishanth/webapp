import { Component, OnInit,TemplateRef  } from '@angular/core';
import { DatePipe } from '@angular/common';

import { UndyedYarnPurchase } from '../../../model/undyed-yarn-purchase';

import { ErrorService } from '../../../service/error.service';
import { LoggerService } from '../../../core/logger.service';
import { ViewService } from '../../../service/view.service';
import { FormService } from '../../../service/form.service';

@Component({
  selector: 'app-uyp-view',
  templateUrl: './uyp-view.component.html',
  styleUrls: ['./uyp-view.component.css']
})
export class UypViewComponent implements OnInit {

  uypView: UndyedYarnPurchase[];
  undyedYarnPurchase: UndyedYarnPurchase;

  formType: string;

  maxSize = 5;
  bigTotalItems = 175;
  bigCurrentPage = 1;
  totalItems = 10;
  numPages = 0;
  p = 1;

  constructor(
    private errorService: ErrorService,
    private viewService: ViewService,
    private formService: FormService

  ) { }

  ngOnInit() {
    this.loadUYPDetails();
    this.formService.uypFormSaved.subscribe((isFormSaved => {
      if (isFormSaved) {
        this.loadUYPDetails();
      }
    }));
  }

  addUYP(): boolean {
    this.formType = 'Add';
    this.undyedYarnPurchase = new UndyedYarnPurchase();
    this.formService.uypFormAction.emit(this.undyedYarnPurchase);
    return true;
  }
  editUYP(uypId: number): boolean {

    this.formType = 'Edit';
    this.formService.findByUYPId(uypId).subscribe((undyedYarnPurchase) => {
      LoggerService.log(undyedYarnPurchase);
      this.undyedYarnPurchase = undyedYarnPurchase;
      this.formService.uypFormAction.emit(this.undyedYarnPurchase);
    }, (error: Response) => {
       LoggerService.error('Login Error', error);
       this.logError(error);
    });
    console.log(uypId);

    return true;
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
      this.errorService.handleError(error['error']);
  };
}
