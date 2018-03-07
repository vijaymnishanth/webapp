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

@Component({
  selector: 'app-dyeing-order',
  templateUrl: './dyeing-order.component.html',
  styleUrls: ['./dyeing-order.component.css']
})
export class DyeingOrderComponent implements OnInit {

  dyeingOrderForm: FormGroup;
  typeaheadLoading: boolean;
  typeaheadNoResults: boolean;
  shadeColour: string;
  shadeId: number;

  shade: Shade[] = [
    {shadeId: 1, shadeNo: 'dasdas',
    shadeColour: 'sdasdas'},
    {shadeId: 2, shadeNo: 'hkajkl',
    shadeColour: 'p[sd'}];

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
      shade: this.fb.group({
      shadeId: ['', Validators.required],
      shadeNo: ['', Validators.required],
      shadeColour: ['', Validators.required]
      }),
      countId: ['', Validators.required],
      description: ['', Validators.required],
      customer: ['', Validators.required]

    });
  }

  saveDOForm() {
    // s
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
      this.errorService.handleError(error['error']);
  };
}
