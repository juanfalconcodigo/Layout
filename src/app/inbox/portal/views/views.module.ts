import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalInboxRoutingModule as ViewsRoutingModule } from './views-routing.module';
import { PortalViewComponent } from './portal-view/portal-view.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [PortalViewComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    CoreModule
  ]
})
export class ViewsModule { }
