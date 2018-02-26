import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; // importing the module
import { Ng2OrderModule } from 'ng2-order-pipe';


@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule,
    BsDatepickerModule, PaginationModule, NgxPaginationModule, Ng2SearchPipeModule, Ng2OrderModule]
})
export class AppBootstrapModule { }
