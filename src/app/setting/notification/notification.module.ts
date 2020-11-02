import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsModule as NotificationViewsModule } from './views/views.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NotificationViewsModule
  ]
})
export class NotificationModule { }
