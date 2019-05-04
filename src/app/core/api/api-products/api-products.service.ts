import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from './api-products.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ApiProductsService {
  private products: Product[];
  private products$ = new BehaviorSubject<Product[]>(null);

  constructor() {
    this.products = [
      {
        id: 'product-1',
        title: 'Title',
        description: 'Descriptions',
        image: {
          src: 'assets/images/maxresdefault.jpg',
          alt: 'alt'
        }
      },
      {
        id: 'product-2',
        title: 'Title',
        description: 'Descriptions',
        image: {
          src: 'assets/images/maxresdefault.jpg',
          alt: 'alt'
        }
      },
      {
        id: 'product-3',
        title: 'Title',
        description: 'Descriptions',
        image: {
          src: 'assets/images/maxresdefault.jpg',
          alt: 'alt'
        }
      },
      {
        id: 'product-4',
        title: 'Title',
        description: 'Descriptions',
        image: {
          src: 'assets/images/maxresdefault.jpg',
          alt: 'alt'
        }
      },
      {
        id: 'product-5',
        title: 'Title',
        description: 'Descriptions',
        image: {
          src: 'assets/images/maxresdefault.jpg',
          alt: 'alt'
        }
      }
    ]
  }

  public getProducts(): Observable<Product[]> {
    this.products$.next(this.products);
    return this.products$.asObservable();
  }

  public getProductById(productId: string): Observable<Product[]> {
    return Observable.of(this.products.filter(product => product.id === productId));
  }
}
