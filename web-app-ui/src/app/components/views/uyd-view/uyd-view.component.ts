import { UndyedYarnDyeingService } from './../../../service/undyed-yarn-dyeing.service';
import { UndyedYarnDyeing } from './../../../model/undyed-yarn-dyeing';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { DatePipe } from '@angular/common';

import { ErrorService } from '../../../service/error.service';
import { LoggerService } from '../../../core/logger.service';
import { ViewService } from '../../../service/view.service';
import { FormService } from '../../../service/form.service';
declare var $: any;

@Component({
  selector: 'app-uyd-view',
  templateUrl: './uyd-view.component.html',
  styleUrls: ['./uyd-view.component.css']
})
export class UydViewComponent implements OnInit {

  uydView: UndyedYarnDyeing[];
  undyedYarnDyeing: UndyedYarnDyeing;
  uydId: number[] = [];
  formType: string;
  p = 1;
  key = 'yarnTypeId'; // set default
  reverse = false;
  search: string;

  constructor(
    private errorService: ErrorService,
    private viewService: ViewService,
    private formService: FormService,
    private undyedYarnDyeingService: UndyedYarnDyeingService
  ) { }

  ngOnInit() {
    this.loadUYPDetails();
    this.undyedYarnDyeingService.uydFormSaved.subscribe((isFormSaved => {
      if (isFormSaved) {
        this.loadUYPDetails();
      }
    }));
  }

  addUYD(): boolean {
    this.formType = 'Add';
    this.undyedYarnDyeing = new UndyedYarnDyeing();
    this.undyedYarnDyeingService.uydFormAction.emit(this.undyedYarnDyeing);
    return true;
  }
  editUYD(uydId: number): boolean {

    this.formType = 'Edit';
    this.undyedYarnDyeingService.findByUYDId(uydId).subscribe((undyedYarnDyeing) => {
      LoggerService.log(undyedYarnDyeing);
      this.undyedYarnDyeing = undyedYarnDyeing;
      this.undyedYarnDyeingService.uydFormAction.emit(this.undyedYarnDyeing);
    }, (error: Response) => {
       LoggerService.error('Login Error', error);
       this.logError(error);
    });
    console.log(uydId);

    return true;
  }
  loadUYPDetails() {
    this.viewService.findAllUYD().subscribe((data) => {
      this.uydView = data;
      LoggerService.log(this.uydView);

    }, (error: Response) => {
      LoggerService.error('Login Error', error);
      this.logError(error);
   });
  }

  deleteUYDById(uydId: number): boolean {
    this.uydId = [uydId];
    LoggerService.log(this.uydId);
    return true;
  }

  deleteUYDByIds(): boolean {
    const checkbox = $('table tbody input[type="checkbox"]');
    // LoggerService.log(elem);
    const selectedUYDId = [];
        checkbox.each(function(){
          if (this.checked) {
            selectedUYDId.push(this.value);
          }
         });
         this.uydId = selectedUYDId;
         return true;
  }

  deleteUYD() {
    this.formService.deleteUYP(this.uydId).subscribe(() => {
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
