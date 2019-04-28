import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { SidebarCartComponent } from './sidebar-cart/sidebar-cart.component';
import { BaseLayout } from './base.layout';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { MainFooterComponent } from './main-footer/main-footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    BaseLayout,
    MainNavbarComponent,
    SidebarCartComponent,
    MainFooterComponent
  ],
  exports: [
    BaseLayout,
    MainNavbarComponent,
    SidebarCartComponent,
    MainFooterComponent
  ]
})
export class BaseModule { }
