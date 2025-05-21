import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { ProductType } from '../../types/product.type';
import { OrderType } from '../../types/order.type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public itemData: ProductType | null = {
    id: 0,
    image: "",
    title: "",
    price: 0,
    description: ""
  }

  public title: string = ""

  constructor(private http: HttpClient) {
  }

  public getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>("https://testologia.ru/tea")
  }

  public sendOrder(data: OrderType) {
    return this.http.post<{success: number}>("https://testologia.ru/order-tea", data)
  }
}
