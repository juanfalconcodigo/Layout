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
        path: '',
        loadChildren: () => import('src/app/inbox/menu/menu.module').then((m) => m.MenuModule),
        data: {
          breadcrumb: ''
        }
      },
      {
        path: 'FEEDBACK',
        loadChildren: () => import('src/app/inbox/portal/portal.module').then((m) => m.PortalModule),
        data: {
          breadcrumb: 'FEEDBACK',
          access: ['FEEDBACK']
        },
        canActivate:[PortalGuard],
        canLoad:[PortalGuard]
      },
      {
        path: 'EUROPA_WEB',
        loadChildren: () => import('src/app/inbox/portal/portal.module').then((m) => m.PortalModule),
        data: {
          breadcrumb: 'EUROPA_WEB',
          access: ['EUROPA_WEB']
        },
        canActivate:[PortalGuard],
        canLoad:[PortalGuard]
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
