import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingComponent } from './setting.component';

const routes: Routes = [
  {
    path: '', component: SettingComponent,
    children: [
      { path: 'notification', loadChildren: () => import('./notification/notification.module').then(m => m.NotificationModule) },
      { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
      { path: '', pathMatch: 'full', redirectTo: 'notification' },
      { path: '**', pathMatch: 'full', redirectTo: 'notification' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
