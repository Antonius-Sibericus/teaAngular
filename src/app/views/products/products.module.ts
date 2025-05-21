import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CatalogueComponent } from 'src/app/views/products/catalogue/catalogue.component';
import { ItemComponent } from 'src/app/views/products/item/item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CatalogueComponent,
    ItemComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
