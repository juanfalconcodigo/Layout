import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuViewComponent } from './menu-view/menu-view.component';

const routes: Routes = [
  {
    path: '',
    component: MenuViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
