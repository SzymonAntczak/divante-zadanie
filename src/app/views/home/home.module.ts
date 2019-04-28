import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeView } from './home.view';

export const HomeViewRouter = { path: '', component: HomeView };

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeView
  ]
})
export class HomeModule { }
