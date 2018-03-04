import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {AppConfig} from '../../../config/app.config';

import { DyeingOrder } from '../../../model/dyeing-order';

import { FormService } from '../../../service/form.service';
import { ErrorService } from '../../../service/error.service';
import { LoggerService } from '../../../core/logger.service';

@Component({
  selector: 'app-dyeing-order',
  templateUrl: './dyeing-order.component.html',
  styleUrls: ['./dyeing-order.component.css']
})
export class DyeingOrderComponent implements OnInit {

  dyeingOrderForm: FormGroup;
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona'];

  constructor(private fb: FormBuilder,
    private router: Router,
    private formService: FormService,
    private errorService: ErrorService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.dyeingOrderForm = this.fb.group({
      dyeingOrderId: [''],
      dyeingOrderNo: [''], // <--- the FormControl called "name"
      orderDate: [new Date(), Validators.required],
      shadeId: ['', Validators.required],
      shadeNo: [, Validators.required],
      shadeColour: ['', Validators.required],
      countId: ['', Validators.required],
      description: ['', Validators.required],
      customer: ['', Validators.required]

    });
  }

  saveDOForm() {
    // s
  }
     /**
     * @description handle error
     * @param error
     */
    logError = function(error) {
      this.errorService.handleError(error['error']);
  };
}
