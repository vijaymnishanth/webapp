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
      yarnTypeId: ['', Validators.required], // <--- the FormControl called "name"
      yarnCountId: ['', Validators.required],
      supplierId: ['', Validators.required],
      purchaseDate: [new Date(), Validators.required],
      quantity: ['', Validators.required]

    });
  }

  ngOnInit() {

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
     // this.onSucces(token);
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
