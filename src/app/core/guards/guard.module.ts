import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalGuard } from './portal.guard';



@NgModule({
  imports: [
    CommonModule
  ],
  providers:[
    PortalGuard
  ]
})
export class GuardModule { }
