import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { FeedBackViewComponent } from './feed-back-view/feed-back-view.component';


@NgModule({
  declarations: [FeedBackViewComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
