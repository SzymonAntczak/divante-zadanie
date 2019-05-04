import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg';
import { RouterModule } from '@angular/router';
import 'rxjs/add/observable/of';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    InlineSVGModule.forRoot()
  ],
  declarations: [
    LoaderComponent
  ],
  exports: [
    LoaderComponent,
    CommonModule,
    RouterModule,
    InlineSVGModule
  ]
})
export class SharedModule { }
