import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseModule } from './layout/base/base.layout.module';
import { BaseLayout } from './layout/base/base.layout';
import { HomeViewRouter } from './home/home.module';

const routes: Routes = [
  { path: '', component: BaseLayout,
    children: [
      HomeViewRouter
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }

export const RoutableLayoutsModule = [
  BaseModule
];