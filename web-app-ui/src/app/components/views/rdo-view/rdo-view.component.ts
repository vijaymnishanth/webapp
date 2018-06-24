import { DyeingOrderSummary } from './../../../model/dyeing-order-summary';
import { ErrorService } from './../../../service/error.service';
import { LoggerService } from './../../../core/logger.service';
import { Router } from '@angular/router';
import { DyeingOrderService } from './../../../service/dyeing-order.service';
import { DyeingOrderReceived } from './../../../model/dyeing-order-received';
import { FormService } from './../../../service/form.service';
import { DyeingOrder } from './../../../model/dyeing-order';
import { Component, OnInit } from '@angular/core';
import { ViewService } from '../../../service/view.service';

declare var $: any;

@Component({
  selector: 'app-rdo-view',
  templateUrl: './rdo-view.component.html',
  styleUrls: ['./rdo-view.component.css']
})
export class RdoViewComponent implements OnInit {

  dyeingOrder: DyeingOrder = new DyeingOrder;
  dyeingOrderReceived: DyeingOrderReceived;
  search: string;
  formType: string;
  dorView: DyeingOrderReceived[];
  key = 'dorId'; // set default
  reverse = false;
  page = 1;
  balanceOrderQuantity: number;
  dorId: number[] = [];

  constructor(
    private viewService: ViewService,
    private formService: FormService,
    private errorService: ErrorService,
    private router: Router,
    private dyeingOrderService: DyeingOrderService
  ) { }

  ngOnInit() {
    if (this.dyeingOrderService.dyeingOrder !== undefined) {
    this.dyeingOrder = this.dyeingOrderService.dyeingOrder;
    this.updateBalanceOrder();
    this.loadDyeingOrderReceived();
    this.dyeingOrderService.dorFormSaved.subscribe((isSaved) => {
      if (isSaved) {
        this.updateBalanceOrder();
        this.loadDyeingOrderReceived();
      }
    });
   }else {
     this.router.navigate(['/dyeingOrderView']);
   }
   this.dyeingOrderService.dyeingOrderFormSaved.subscribe((isSaved) => {
     if (isSaved && this.dyeingOrderService.doSaveType === 'edit') {
      this.dyeingOrder = this.dyeingOrderService.dyeingOrder;
      this.updateBalanceOrder();
     }
   });
  }

  loadDyeingOrderReceived() {

    this.viewService.findDORByDOId(this.dyeingOrder.dyeingOrderId).subscribe((dyeingOrderReceived) => {
      this.dorView = dyeingOrderReceived;
    }, (error: Response) => {
      this.logError(error);
    });
  }

  updateBalanceOrder() {
    this.dyeingOrderService.findSumOfDOR(this.dyeingOrder.dyeingOrderId).subscribe((sum) => {
      this.balanceOrderQuantity = this.dyeingOrder.quantity - sum;
    });
  }

  addDyeingOrderReceived(): boolean {
    this.formType = 'Add';
    this.dyeingOrderReceived = new DyeingOrderReceived();
    this.dyeingOrderReceived.dyeingOrderId = this.dyeingOrder.dyeingOrderId;
    this.dyeingOrderService.dorFormAction.emit(this.dyeingOrderReceived);
    return true;
  }

  deleteDORByIds() {
    const checkbox = $('table tbody input[type="checkbox"]');
    // LoggerService.log(elem);
    const selectedDORId = [];
        checkbox.each(function(){
          if (this.checked) {
            selectedDORId.push(this.value);
          }
         });
         this.dorId = selectedDORId;
         return true;
  }

  editDyeingOrderReceived(dyeingOrderReceived: DyeingOrderReceived) {
    this.formType = 'Edit';
    this.dyeingOrderReceived = dyeingOrderReceived;
    this.dyeingOrderService.dorFormAction.emit(this.dyeingOrderReceived);
  }

  deleteDORById(dorId: number): boolean {
    this.dorId = [dorId];
    return true;
  }

  editDyeingOrder(): boolean {
    this.dyeingOrderService.doSaveType = 'edit';
    this.dyeingOrderService.doFormAction.emit(this.dyeingOrder);
    return true;
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

  deleteDOR() {
    this.dyeingOrderService.deleteDOR(this.dorId).subscribe(() => {
      this.updateBalanceOrder();
      this.loadDyeingOrderReceived();
      $('#deleteDORModal').modal('toggle');
    }, (error: Response) => {
      LoggerService.error('Login Error', error);
      this.logError(error);
   });
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
