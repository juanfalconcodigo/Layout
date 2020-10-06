import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    loadChildren:()=>import('./home/home.module').then((m)=>m.HomeModule)
  },
  {
    path:'documentation',
    loadChildren:()=>import('./documentation/documentation.module').then((m)=>m.DocumentationModule)
  },
  {
    path:'inbox',
    loadChildren:()=>import('./inbox/inbox.module').then((m)=>m.InboxModule)
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
