import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule, RoutableLayoutsModule } from './views-routing.module';
import { HomeView } from './home/home.view';

@NgModule({
  imports: [
    CommonModule,
    ViewsRoutingModule,
    RoutableLayoutsModule
  ],
  declarations: [
    HomeView
  ]
})
export class ViewsModule { }
