import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from './api/api.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MenuService } from './menu/menu.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    ApiModule
  ],
  providers: [
    MenuService
  ]
})
export class CoreModule { }
