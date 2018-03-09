import { Component, OnInit, TemplateRef } from '@angular/core';
import { DatePipe } from '@angular/common';

import { UndyedYarnPurchase } from '../../../model/undyed-yarn-purchase';

import { ErrorService } from '../../../service/error.service';
import { LoggerService } from '../../../core/logger.service';
import { ViewService } from '../../../service/view.service';
import { FormService } from '../../../service/form.service';
declare var $: any;


@Component({
  selector: 'app-uyp-view',
  templateUrl: './uyp-view.component.html',
  styleUrls: ['./uyp-view.component.css']
})
export class UypViewComponent implements OnInit {

  uypView: UndyedYarnPurchase[];
  undyedYarnPurchase: UndyedYarnPurchase;
  uypId: number[] = [];
  formType: string;
  p = 1;
  key = 'yarnTypeId'; // set default
  reverse = false;
  search: string;

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

  deleteUYPById(uypId: number) {
    this.uypId = [uypId];
    LoggerService.log(this.uypId);
  }

  deleteUYPByIds() {
    const checkbox = $('table tbody input[type="checkbox"]');
    // LoggerService.log(elem);
    const selectedUYPId = [];
        checkbox.each(function(){
          if (this.checked) {
            selectedUYPId.push(this.value);
          }
         });
         this.uypId = selectedUYPId;
  }

  deleteUYP() {
    this.formService.deleteUYP(this.uypId).subscribe(() => {
      this.loadUYPDetails();
      $('#deleteUYPModal').modal('toggle');

    }, (error: Response) => {
        LoggerService.error('Login Error', error);
        this.logError(error);
     }
    );
  }

  selectAllRecord(elem) {

    const checkbox = $('table tbody input[type="checkbox"]');
   // LoggerService.log(elem);
    if (elem.checked) {
       checkbox.each(function(){
         this.checked = true;
        });
      } else {
        checkbox.each(function(){
          this.checked = false;
        });
      }
  }

  selectRecord(event, id) {
    const elem = event.srcElement;

    if (!elem.checked) {
      $('#selectAll').prop('checked', false);
    }
  }
  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
    /**
     * @description handle error
     * @param error
     */
    logError = function(error) {
      this.errorService.handleError(error);
  };
}
