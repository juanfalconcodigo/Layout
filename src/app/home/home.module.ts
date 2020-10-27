import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
//ng-snotify
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
//ngx-switch
import { UiSwitchModule } from 'ngx-ui-switch';
//shared root
import { SharedModule as AppSharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SnotifyModule,
    UiSwitchModule,
    AppSharedModule
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService
  ]
})
export class HomeModule { }
