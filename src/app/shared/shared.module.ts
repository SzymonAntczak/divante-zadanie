import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg';
import { RouterModule } from '@angular/router';
import 'rxjs/add/observable/of';

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
