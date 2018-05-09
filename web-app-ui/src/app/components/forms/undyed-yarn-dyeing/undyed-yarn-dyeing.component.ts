import { UndyedYarnDyeingService } from './../../../service/undyed-yarn-dyeing.service';
import { LoggerService } from './../../../core/logger.service';
import { FormService } from './../../../service/form.service';
import { ErrorService } from './../../../service/error.service';
import { YarnType } from './../../../model/yarn-type';
import { Count } from './../../../model/count';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {AppConfig} from '../../../config/app.config';
import { UndyedYarnDyeing } from '../../../model/undyed-yarn-dyeing';
declare var $: any;

@Component({
  selector: 'app-undyed-yarn-dyeing',
  templateUrl: './undyed-yarn-dyeing.component.html',
  styleUrls: ['./undyed-yarn-dyeing.component.css']
})

export class UndyedYarnDyeingComponent implements OnInit {

  uydForm: FormGroup;
  undyedYarnDyeing: UndyedYarnDyeing;

  countArray: Count[];
  yarnTypeArray: YarnType[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private formService: FormService,
    private undyedYarnDyeingService: UndyedYarnDyeingService,
    private errorService: ErrorService) {
    this.createForm();
  }
  createForm() {
    this.uydForm = this.fb.group({
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
      purchaseDate: [new Date(), Validators.required],
      quantity: ['', Validators.required],
      dyeingDeliveryChallanNo: ['', Validators.required]
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
  }

  saveUYDForm() {
    this.undyedYarnDyeing = this.uydForm.value;
    console.log(this.undyedYarnDyeing);
    this.undyedYarnDyeingService.saveUYDForm(this.undyedYarnDyeing).subscribe((undyedYarnPurchase) => {
      $('#addEditUYDModal').modal('toggle');
    }, (error: Response) => {
       LoggerService.error('Error', error);
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
