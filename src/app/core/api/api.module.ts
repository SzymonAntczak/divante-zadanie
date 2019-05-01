import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiAboutService } from './api-about/api-about.service';
import { ApiContactService } from './api-contact/api-contact.service';
import { ApiHomeService } from './api-home/api-home.service';
import { ApiMenuService } from './api-menu/api-menu.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ApiAboutService,
    ApiContactService,
    ApiHomeService,
    ApiMenuService
  ]
})
export class ApiModule { }
