import { DyeingOrderService } from './../../../service/dyeing-order.service';
import { Count } from './../../../model/count';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';

import {AppConfig} from '../../../config/app.config';

import { DyeingOrder } from '../../../model/dyeing-order';
import { Shade } from './../../../model/shade';

import { FormService } from '../../../service/form.service';
import { ErrorService } from '../../../service/error.service';
import { LoggerService } from '../../../core/logger.service';

declare var $: any;

@Component({
  selector: 'app-dyeing-order',
  templateUrl: './dyeing-order.component.html',
  styleUrls: ['./dyeing-order.component.css']
})
export class DyeingOrderComponent implements OnInit {

  dyeingOrderForm: FormGroup;
  dyeingOrder: DyeingOrder;
  typeaheadLoading: boolean;
  typeaheadNoResults: boolean;
  shadeNoSelected: string;
  shadeColour: string;
  shadeId: number;
  countArray: Count[];

  shadeArray: Observable<Shade[]>;

  constructor(private fb: FormBuilder,
    private router: Router,
    private formService: FormService,
    private dyeingOrderService: DyeingOrderService,
    private errorService: ErrorService) {
    this.createForm();
    this.shadeArray = Observable.create((observer: any) => {
      // Runs on every search
      observer.next(this.shadeNoSelected);
    }).mergeMap((token: string) => this.formService.searchByShadeNo(token));
  }

  ngOnInit() {

    this.formService.findAllCount().subscribe((count) => {
     this.countArray = count;
     }, (error: Response) => {
        LoggerService.error('Login Error', error);
        this.logError(error);
     });

     this.dyeingOrderService.doFormAction.subscribe((dyeingOder) => {
      LoggerService.log(dyeingOder);
       this.dyeingOrderForm.setValue(dyeingOder);
     });
  }

  createForm() {
    this.dyeingOrderForm = this.fb.group({
      dyeingOrderId: [''],
      dyeingOrderNo: [''], // <--- the FormControl called "name"
      orderDate: [new Date(), Validators.required],
      shade: this.fb.group({
      shadeId: ['', Validators.required],
      shadeNo: ['', Validators.required],
      shadeColour: ['', Validators.required]
      }),
      count: this.fb.group({
        countId: ['0', Validators.required],
        count: [''],
        countDesc: ['']
      }),
      description: ['', Validators.required],
      quantity: ['', Validators.required],
      customer: ['', Validators.required]

    });
  }

  saveDOForm() {
    this.dyeingOrder = this.dyeingOrderForm.value;
    this.dyeingOrderService.saveDOForm(this.dyeingOrder).subscribe((dyeingOrder) => {
      this.dyeingOrderService.dyeingOrder = dyeingOrder;
      LoggerService.log(this.dyeingOrder);
      this.dyeingOrderService.dyeingOrderFormSaved.emit(true);
      $('#dyeingOrderModal').modal('toggle');
    }, (error: Response) => {
       LoggerService.error('Login Error', error);
       this.logError(error);
    });
  }

  changeTypeaheadLoading(e: boolean): void {
    this.typeaheadLoading = e;
  }

  changeTypeaheadNoResults(e: boolean): void {
    this.typeaheadNoResults = e;
  }

  typeaheadOnSelect(e: TypeaheadMatch): void {
    console.log('Selected value: ', e);
    this.shadeId = e.item.shadeId;
    this.shadeColour = e.item.shadeColour;
  }
     /**
     * @description handle error
     * @param error
     */
    logError = function(error) {
      this.errorService.handleError(error);
  };
}
