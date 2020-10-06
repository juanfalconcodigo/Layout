import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedBackViewComponent } from './feed-back-view/feed-back-view.component';

const routes: Routes = [
  { path: '', component: FeedBackViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
