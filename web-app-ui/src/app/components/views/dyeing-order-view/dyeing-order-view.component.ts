import { DyeingOrderService } from './../../../service/dyeing-order.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { DyeingOrder } from '../../../model/dyeing-order';

import { ErrorService } from '../../../service/error.service';
import { LoggerService } from '../../../core/logger.service';
import { ViewService } from '../../../service/view.service';
import { FormService } from '../../../service/form.service';

declare var $: any;

@Component({
  selector: 'app-dyeing-order-view',
  templateUrl: './dyeing-order-view.component.html',
  styleUrls: ['./dyeing-order-view.component.css']
})
export class DyeingOrderViewComponent implements OnInit {

  dyeigOrderView: DyeingOrder[];
  search: string;
  dyeingOrder: DyeingOrder;
  key = 'dyeingOrderNo'; // set default
  reverse = false;
  page = 1;
  dyeingOrderId: number[];

  constructor(
    private errorService: ErrorService,
    private viewService: ViewService,
    private formService: FormService,
    private dyeingOrderService: DyeingOrderService
  ) { }

  ngOnInit() {
    this.loadDyeingOrderDetails();
    this.dyeingOrderService.dyeingOrderFormSaved.subscribe((isFormSaved => {
      if (isFormSaved && this.dyeingOrderService.doSaveType === 'add') {
        this.loadDyeingOrderDetails();
      }
    }));
  }

  loadDyeingOrderDetails() {
    this.viewService.findAllDyeingOrder().subscribe((data) => {
      this.dyeigOrderView = data;
      LoggerService.log(this.dyeigOrderView);
    }, (error: Response) => {
      LoggerService.error('Login Error', error);
      this.logError(error);
   });
  }

  addDyeingOrder(): boolean {
    this.dyeingOrder = new DyeingOrder();
    this.dyeingOrderService.doSaveType = 'add';
    return true;
  }

  editDyeingOrder(dyeingOrder: DyeingOrder): boolean {
    this.dyeingOrderService.dyeingOrder = dyeingOrder;
    return true;
  }

  deleteDOByIds() {
    const checkbox = $('table tbody input[type="checkbox"]');
    // LoggerService.log(elem);
    const selectedDOId = [];
        checkbox.each(function(){
          if (this.checked) {
            selectedDOId.push(this.value);
          }
         });
         this.dyeingOrderId = selectedDOId;
         return true;
  }

  deleteDOById(dyeingOrderId: number): boolean {
    this.dyeingOrderId = [dyeingOrderId];
    return true;
  }
  deleteDyeingOrder() {
    this.dyeingOrderService.countOfDOR(this.dyeingOrderId).subscribe((count) => {
      if (count === 0) {
      this.dyeingOrderService.deleteDyeingOrder(this.dyeingOrderId).subscribe(() => {
        this.loadDyeingOrderDetails();
        $('#deleteDOModal').modal('toggle');
      }, (error: Response) => {
        LoggerService.error('Login Error', error);
        this.logError(error);
     });
    } else {
      $('#deleteAlertModal').modal('toggle');
    }
    }, (error: Response) => {
      LoggerService.error('Login Error', error);
      this.logError(error);
   });

  }
  selectAllRecord(elem) {

    const checkbox = $('table tbody input[type="checkbox"]');
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
