import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingComponent } from './setting.component';
import { SharedModule as SettingSharedModule } from './shared/shared.module';
import { SettingRoutingModule } from './setting-routing.module';


@NgModule({
  declarations: [SettingComponent],
  imports: [
    CommonModule,
    SettingSharedModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
