import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutView } from './about.view';
import { SharedModule } from '../../shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  imports: [
    AboutRoutingModule,
    CommonModule,
    SharedModule
  ],
  declarations: [
    AboutView
  ]
})
export class AboutViewModule { }
