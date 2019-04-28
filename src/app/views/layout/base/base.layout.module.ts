import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { SidebarCartComponent } from './sidebar-cart/sidebar-cart.component';
import { BaseLayout } from './base.layout';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    BaseLayout,
    MainNavbarComponent,
    SidebarCartComponent
  ],
  exports: [
    BaseLayout,
    MainNavbarComponent,
    SidebarCartComponent
  ]
})
export class BaseModule { }
