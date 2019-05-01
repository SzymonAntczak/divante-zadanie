import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from './api-home.model';

@Injectable()
export class ApiHomeService {

  constructor() { }

  public getProducts(): Observable<Product[]> {
    return Observable.of([
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
    ]);
  }
}
