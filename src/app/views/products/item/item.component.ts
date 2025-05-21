import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProductType } from 'src/app/types/product.type';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  public currentProduct: ProductType = {} as ProductType

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    if (this.productService.itemData) {
      this.currentProduct = {
        id: this.productService.itemData.id,
        image: this.productService.itemData.image,
        title: this.productService.itemData.title,
        price: this.productService.itemData.price,
        description: this.productService.itemData.description
      }
    }
  }

  public createOrder(): void {
    this.productService.title = this.currentProduct.title
    this.router.navigate(["/order"])
  }
}
