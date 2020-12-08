import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuInboxRoutingModule as ViewsRoutingModule } from './views-routing.module';
import { MenuViewComponent } from './menu-view/menu-view.component';


@NgModule({
  declarations: [MenuViewComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
