import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductView } from './product.view';

const routes: Routes = [
  {
    path: '',
    component: ProductView
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
