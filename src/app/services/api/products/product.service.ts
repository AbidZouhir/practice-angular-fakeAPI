import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductRepresentation} from "../models/product-representation";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'https://fakestoreapi.com/';

  constructor(
    private http: HttpClient
  ) { }
  getAllProductsWithLimit(limit = 5){
    const productsUrl2 = this.baseUrl+'products?limit='+limit;
    const productUrl = `${this.baseUrl}products?limit=${limit}`;
    return this.http.get<Array<ProductRepresentation>>(productUrl);
  }

  createProduct(product: ProductRepresentation){
    const productUrl=`${this.baseUrl}products`;
    return this.http.post<ProductRepresentation>(productUrl,product);
  }
}
