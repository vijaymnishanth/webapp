import { YarnType } from './../../../model/yarn-type';
import { Count } from './../../../model/count';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {AppConfig} from '../../../config/app.config';

import { FormService } from '../../../service/form.service';
import { UndyedYarnPurchase } from '../../../model/undyed-yarn-purchase';
import { ErrorService } from '../../../service/error.service';
import { LoggerService } from '../../../core/logger.service';
declare var $: any;
@Component({
  selector: 'app-undyed-yarn-purchase',
  templateUrl: './undyed-yarn-purchase.component.html',
  styleUrls: ['./undyed-yarn-purchase.component.css']
})
export class UndyedYarnPurchaseComponent implements OnInit {

  uypForm: FormGroup;
  undyedYarnPurchase: UndyedYarnPurchase;

  countArray: Count[];
  yarnTypeArray: YarnType[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private formService: FormService,
    private errorService: ErrorService) {
    this.createForm();
  }

  createForm() {
    this.uypForm = this.fb.group({
      uypId: [''],
      yarnType: this.fb.group({
        yarnTypeId: ['0', Validators.required],
        yarnType: [''],
        yarnTypeDesc: ['']
      }),
      count: this.fb.group({
        countId: ['0', Validators.required],
        count: [''],
        countDesc: ['']
      }),
      supplier: ['', Validators.required],
      purchaseDate: [new Date(), Validators.required],
      quantity: ['', Validators.required]
    });
  }

  ngOnInit() {

    this.formService.findAllCount().subscribe((count) => {
      this.countArray = count;
      }, (error: Response) => {
         LoggerService.error('Login Error', error);
         this.logError(error);
      });

    this.formService.findAllYarnType().subscribe((yarnType) => {
        this.yarnTypeArray = yarnType;
        }, (error: Response) => {
           LoggerService.error('Login Error', error);
           this.logError(error);
        });

    this.formService.uypFormAction.subscribe((uypForm => {
      console.log(uypForm);
      this.uypForm.setValue(uypForm);
      // this.uypForm.value.purchaseDate = new Date();
    }));
  }

  saveUYPForm() {
    this.undyedYarnPurchase = this.uypForm.value;
    console.log(this.undyedYarnPurchase);
    this.formService.saveUYPForm(this.undyedYarnPurchase).subscribe((undyedYarnPurchase) => {
      $('#addEditUYPModal').modal('toggle');
    }, (error: Response) => {
       LoggerService.error('Login Error', error);
       this.logError(error);
    });
  }

    /**
     * @description handle error
     * @param error
     */
    logError = function(error) {
      this.errorService.handleError(error);
  };
}
