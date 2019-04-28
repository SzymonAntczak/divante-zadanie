import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    InlineSVGModule.forRoot()
  ],
  declarations: [],
  exports: [
    CommonModule,
    RouterModule,
    InlineSVGModule
  ]
})
export class SharedModule { }
