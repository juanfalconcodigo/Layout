import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule as AppSharedModule } from '../shared/shared.module';
import { ServiceModule } from './services/service.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServiceModule,
    HttpClientModule
  ],
  exports:[
    AppSharedModule
  ]
})
export class CoreModule { }
