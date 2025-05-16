import { Component, Input, OnInit } from '@angular/core';
import { ProductType } from 'src/app/types/product.type';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductType = {} as ProductType

  constructor() { }

  ngOnInit(): void {
  }

}
