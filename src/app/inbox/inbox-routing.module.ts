import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboxComponent } from './inbox.component';
import { PortalGuard } from '../core/guards/portal.guard';

const routes: Routes = [
  {
    path: '',
    component: InboxComponent,
    children: [
      {
        path: 'All',
        loadChildren: () => import('src/app/inbox/menu/menu.module').then((m) => m.MenuModule)
      },
      {
        path: 'PORTAL/:param',
        loadChildren: () => import('src/app/inbox/portal/portal.module').then((m) => m.PortalModule),
        canActivate:[PortalGuard],
        canLoad:[PortalGuard]
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'All'
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
