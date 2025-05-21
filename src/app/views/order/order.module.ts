import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order/order.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OrderComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
