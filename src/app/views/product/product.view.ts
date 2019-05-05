import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiCartService } from '../../core/api/api-cart/api-cart.service';
import { ApiProductsService } from '../../core/api/api-products/api-products.service';
import { Product } from '../../core/api/api-products/api-products.model';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'dvt-product',
  templateUrl: './product.view.html',
  styleUrls: ['./product.view.scss']
})
export class ProductView implements OnInit, OnDestroy {
  public product: Product;
  public isButtonActive: boolean;

  private subscription: Subscription;

  constructor(
    private apiCartService: ApiCartService,
    private apiProductsService: ApiProductsService,
    private route: ActivatedRoute,
    protected notificationService: NotificationsService
  ) { }

  ngOnInit() {
    this.subscription = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return this.apiProductsService.getProductById(id);
      })
    ).subscribe(product => {
      this.product = product[0];

      this.apiCartService.watchCartItems().subscribe(items => {
        const isItemAdded = !!items.find(item => item.id === this.product.id);
        this.isButtonActive = isItemAdded ? false : true;
      })
    })
  }

  public addProductToCart(product: Product) {
    this.apiCartService.addProductToCart(product);
    this.notificationService.success('', 'The product has been added to the cart');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
