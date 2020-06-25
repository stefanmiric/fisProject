import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Products} from "./products";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>('assets/products.json');
  };

  getProductsByCategory(category : string) : Observable<Products[]> {
    return this.http.get<Products[]>('assets/products.json').pipe(
      map(products => products.filter(product => product.category == category))
    );
  };
}
