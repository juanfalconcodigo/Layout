import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationSettingRoutingModule as ViewsRoutingModule } from './views-routing.module';
import { NotificationViewComponent } from './notification-view/notification-view.component';


@NgModule({
  declarations: [NotificationViewComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
