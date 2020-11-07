import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'documentation',
    loadChildren: () => import('./documentation/documentation.module').then((m) => m.DocumentationModule)
  },
  {
    path: 'inbox',
    loadChildren: () => import('./inbox/inbox.module').then((m) => m.InboxModule)
  },
  {
    path: 'feedback-admin/settings/:portalName/:portalId',
    loadChildren: () => import('./setting/setting.module').then((m) => m.SettingModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
