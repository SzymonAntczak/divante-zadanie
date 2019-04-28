import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutView } from './about.view';
import { SharedModule } from '../../shared/shared.module';

export const AboutRouter = {
  path: 'about',
  component: AboutView
};

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    AboutView
  ]
})
export class AboutModule { }
