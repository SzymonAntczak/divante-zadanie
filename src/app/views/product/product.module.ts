import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ProductView } from './product.view';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ],
  declarations: [
    ProductView
  ]
})
export class ProductViewModule { }
