import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSettingRoutingModule as ViewsRoutingModule } from './views-routing.module';
import { UserViewComponent } from './user-view/user-view.component';


@NgModule({
  declarations: [UserViewComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
