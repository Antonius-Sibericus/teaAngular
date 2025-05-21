import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProductType } from 'src/app/types/product.type';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductType = {} as ProductType

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
  }

  public setProduct(): void {
    this.productService.itemData = {
      id: this.product.id,
      image: this.product.image,
      title: this.product.title,
      price: this.product.price,
      description: this.product.description
    }

    localStorage.setItem("currentProduct", JSON.stringify(this.product))
  }
}
