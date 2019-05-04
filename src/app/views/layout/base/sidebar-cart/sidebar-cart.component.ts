import { Component, OnInit, Renderer2, ElementRef, OnDestroy } from '@angular/core';
import { ApiContactService } from '../../../../core/api/api-contact/api-contact.service';
import { Subscription } from 'rxjs/Subscription';
import { ApiCartService } from '../../../../core/api/api-cart/api-cart.service';
import { Product } from '../../../../core/api/api-products/api-products.model';

@Component({
  selector: 'dvt-sidebar-cart',
  templateUrl: './sidebar-cart.component.html',
  styleUrls: ['./sidebar-cart.component.scss']
})
export class SidebarCartComponent implements OnInit, OnDestroy {
  public contactDescription: string;
  public cartItems: Product[];
  private isSidebarCartActive = false;

  private subscriptions: Subscription[] = [];

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private apiContactService: ApiContactService,
    private apiCartService: ApiCartService
  ) { }

  ngOnInit() {
    this.subscriptions.push(
      this.apiContactService.getContactData().subscribe(data => this.contactDescription = data.description)
    );

    this.subscriptions.push(
      this.apiCartService.watchCartItems().subscribe(cartItems => this.cartItems = cartItems)
    );
  }

  public toggleSidebarCart() {
    this.isSidebarCartActive = this.isSidebarCartActive ? false : true;

    if (this.isSidebarCartActive) {
      this.renderer.addClass(this.elementRef.nativeElement, 'active');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'active');
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
