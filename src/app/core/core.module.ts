import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule as AppSharedModule } from '../shared/shared.module';
import { ServiceModule } from './services/service.module';
import { GuardModule } from './guards/guard.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ServiceModule,
    GuardModule
  ],
  exports:[
    AppSharedModule
  ]
})
export class CoreModule { }
