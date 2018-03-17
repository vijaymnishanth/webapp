import { DyeingOrderService } from './../../../service/dyeing-order.service';
import { DyeingOrderReceived } from './../../../model/dyeing-order-received';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {AppConfig} from '../../../config/app.config';

import { FormService } from '../../../service/form.service';
import { ErrorService } from '../../../service/error.service';
import { LoggerService } from '../../../core/logger.service';

declare var $: any;

@Component({
  selector: 'app-dyeing-order-received',
  templateUrl: './dyeing-order-received.component.html',
  styleUrls: ['./dyeing-order-received.component.css']
})
export class DyeingOrderReceivedComponent implements OnInit {

  dyeingOrderReceivedForm: FormGroup;
  dyeingOrderReceived: DyeingOrderReceived;
  rDate: Date;

  constructor(private fb: FormBuilder,
    private router: Router,
    private formService: FormService,
    private dyeingOrderService: DyeingOrderService,
    private errorService: ErrorService) {
    this.createForm();
    }

  ngOnInit() {
    this.dyeingOrderService.dorFormAction.subscribe((dyeingOrderReceived) => {
      console.log(dyeingOrderReceived);
      this.dyeingOrderReceivedForm.setValue(dyeingOrderReceived);
      this.rDate = new Date(this.rDate);
      console.log(this.rDate);
    });
  }

  createForm() {
  this.dyeingOrderReceivedForm = this.fb.group({
    dorId: [''],
    dyeingOrderId: [''],
    receivedDate: [new Date(), Validators.required],
    receivedQuantity: ['', Validators.required],
    dyeingChallanNo: ['', Validators.required]
  });
  }

  saveDORForm() {
    this.dyeingOrderReceived = this.dyeingOrderReceivedForm.value;
    this.dyeingOrderService.saveDORForm(this.dyeingOrderReceived).subscribe(() => {
      $('#addEditDORModal').modal('toggle');
    }, (error: Response) => {
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
