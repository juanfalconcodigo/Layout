import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboxComponent } from './inbox.component';

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
        loadChildren: () => import('src/app/inbox/feed-back/feed-back.module').then((m) => m.FeedBackModule),
        data: {
          breadcrumb: 'FEEDBACK'
        }
      },
      {
        path: 'EUROPA_WEB',
        loadChildren: () => import('src/app/inbox/feed-back/feed-back.module').then((m) => m.FeedBackModule),
        data: {
          breadcrumb: 'EUROPA_WEB'
        }
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
