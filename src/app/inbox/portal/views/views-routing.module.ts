import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalViewComponent } from './portal-view/portal-view.component';

const routes: Routes = [
  {
    path:'',
    component:PortalViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalInboxRoutingModule { }
