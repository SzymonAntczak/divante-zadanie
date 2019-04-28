import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule, RoutableLayoutsModule } from './views-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ViewsRoutingModule,
    RoutableLayoutsModule,
    HomeModule
  ],
  declarations: []
})
export class ViewsModule { }
