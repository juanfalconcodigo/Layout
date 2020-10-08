import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { FeedBackViewComponent } from './feed-back-view/feed-back-view.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [FeedBackViewComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    CoreModule
  ]
})
export class ViewsModule { }
