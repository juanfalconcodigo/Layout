import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { InboxComponent } from './inbox.component';
import { SharedModule as InboxSharedModule } from './shared/shared.module';


@NgModule({
  declarations: [InboxComponent],
  imports: [
    CommonModule,
    InboxSharedModule,
    InboxRoutingModule
  ]
})
export class InboxModule { }
