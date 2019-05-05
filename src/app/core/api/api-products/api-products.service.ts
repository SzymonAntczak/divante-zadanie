import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from './api-products.model';
import { api } from '../api-common.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiProductsService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get(`${api}/products`);
  }

  public getProductById(productId: string): Observable<Product[]> {
    return this.http.get(`${api}/products`).pipe(
      map(products => products.filter(product => product.id === productId))
    );
  }
}


