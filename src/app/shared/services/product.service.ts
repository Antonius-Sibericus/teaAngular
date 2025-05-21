import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { ProductType } from '../../types/product.type';
import { OrderType } from '../../types/order.type';
import { environment } from 'src/environments/environment';

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
    return this.http.get<ProductType[]>(environment.apiURL + "tea")
  }

  public sendOrder(data: OrderType) {
    return this.http.post<{success: number}>(environment.apiURL + "order-tea", data)
  }
}
