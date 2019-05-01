import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeView } from './home.view';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    SharedModule
  ],
  declarations: [
    HomeView
  ]
})
export class HomeViewModule { }
