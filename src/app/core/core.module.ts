import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule as AppSharedModule } from '../shared/shared.module';
import { ServiceModule } from './services/service.module';
import { GuardModule } from './guards/guard.module';
import { InterceptorInterceptor as Interceptor } from './interceptors/interceptor.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ServiceModule,
    GuardModule
  ],
  exports: [
    AppSharedModule
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    }
  ]
})
export class CoreModule { }
