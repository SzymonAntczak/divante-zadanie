import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeView } from './home.view';
import { SharedModule } from '../../shared/shared.module';

export const HomeViewRouter = { path: '', component: HomeView };

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HomeView
  ]
})
export class HomeModule { }
