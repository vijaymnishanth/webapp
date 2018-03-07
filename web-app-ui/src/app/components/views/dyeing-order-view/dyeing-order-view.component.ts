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

  constructor(
    private errorService: ErrorService,
    private viewService: ViewService,
    private formService: FormService
  ) { }

  ngOnInit() {
    this.loadDyeingOrderDetails();
  }

  loadDyeingOrderDetails() {
    // TODO
  }

  addDyeingOrder(): boolean {
    this.dyeingOrder = new DyeingOrder();
    // TO DO
    return true;
  }

  editDyeingOrder() {
    // TO DO
  }

  deleteDOByIds() {
    // TO DO
  }

  deleteDOById(dyeingOrderId: number) {
    // TO DO
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

}
