import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public orderForm = new FormGroup({
    name: new FormControl(""),
    last_name: new FormControl(""),
    phone: new FormControl(""),
    country: new FormControl(""),
    zip: new FormControl(""),
    product: new FormControl(""),
    address: new FormControl(""),
    comment: new FormControl("")
  })

  public get name() { return this.orderForm.get("name") }
  public get last_name() { return this.orderForm.get("last_name") }
  public get phone() { return this.orderForm.get("phone") }
  public get country() { return this.orderForm.get("country") }
  public get zip() { return this.orderForm.get("zip") }
  public get product() { return this.orderForm.get("product") }
  public get address() { return this.orderForm.get("address") }
  public get comment() { return this.orderForm.get("address") }

  public orderError: boolean = false
  public responseError: boolean = false
  public orderFinished: boolean = false

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.orderForm.get("product")?.disable()
    if (this.productService.itemData) {
      this.orderForm.patchValue({
        product: this.productService.itemData.title ? this.productService.itemData.title : JSON.parse(localStorage.getItem("currentProduct")!).title
      })
    }
  }

  public send(): void {
    this.orderError = false
    this.responseError = false
    this.orderFinished = false

    if (this.name && this.last_name && this.phone && this.country && this.zip && this.product && this.address) {
      if (this.name.value && this.last_name.value && this.phone.value && this.country.value && this.zip.value && this.product.value && this.address.value) {
        this.productService.sendOrder({
          name: this.name.value,
          last_name: this.last_name.value,
          phone: this.phone.value,
          country: this.country.value,
          zip: this.zip.value,
          product: this.product.value,
          address: this.address.value,
          comment: this.comment?.value
        })
          .subscribe(response => {
            if (response.success === 1) {
              this.orderFinished = true
            } else {
              this.responseError = true
            }
          })
      } else {
        this.orderError = true
      }
    } else {
      this.orderError = true
    }
  }
}
