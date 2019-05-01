import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ContactView } from './contact.view';

@NgModule({
  imports: [
    ContactRoutingModule,
    CommonModule,
    SharedModule
  ],
  declarations: [
    ContactView
  ]
})
export class ContactViewModule { }
