import { Component, OnInit } from '@angular/core';
import { ApiProductsService } from '../../core/api/api-products/api-products.service';
import { Product } from '../../core/api/api-products/api-products.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'dvt-home',
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.scss']
})
export class HomeView implements OnInit {
  public products$: Observable<Product[]>;

  constructor(
    private apiProductsService: ApiProductsService
  ) { }

  ngOnInit() {
    this.products$ = this.apiProductsService.getProducts();
  }

}
