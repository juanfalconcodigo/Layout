import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule as AppSharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    AppSharedModule
  ]
})
export class CoreModule { }
