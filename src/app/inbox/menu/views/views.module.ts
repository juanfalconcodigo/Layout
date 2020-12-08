import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuInboxRoutingModule as ViewsRoutingModule } from './views-routing.module';
import { MenuViewComponent } from './menu-view/menu-view.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [MenuViewComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    CoreModule
  ]
})
export class ViewsModule { }
