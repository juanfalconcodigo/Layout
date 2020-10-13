import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule as InboxSharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InboxSharedModule
  ],
  exports: [
    InboxSharedModule
  ]
})
export class CoreModule { }