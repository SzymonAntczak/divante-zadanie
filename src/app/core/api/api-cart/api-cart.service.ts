import { Injectable } from '@angular/core';
import { Product } from '../api-products/api-products.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class ApiCartService {
  private cartItems: Product[] = [];
  private cartItems$ = new BehaviorSubject<Product[]>(this.cartItems);

  constructor() { }

  public addProductToCart(product: Product) {
    this.cartItems.push(product);
    this.cartItems$.next(this.cartItems);
  }

  public watchCartItems(): Observable<Product[]> {
    return this.cartItems$.asObservable();
  }
}
