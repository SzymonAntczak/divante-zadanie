import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiAboutService } from './api-about/api-about.service';
import { ApiContactService } from './api-contact/api-contact.service';
import { ApiProductsService } from './api-products/api-products.service';
import { ApiMenuService } from './api-menu/api-menu.service';
import { ApiCartService } from './api-cart/api-cart.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ApiAboutService,
    ApiContactService,
    ApiProductsService,
    ApiMenuService,
    ApiCartService
  ]
})
export class ApiModule { }
