import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from './api/api.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RwdBreakpointsService } from './rwd-breakpoints/rwd-breakpoints.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    ApiModule
  ],
  providers: [
    RwdBreakpointsService
  ]
})
export class CoreModule { }
