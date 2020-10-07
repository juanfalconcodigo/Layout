import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SharedModule as AppSharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    CommonModule,
    AppSharedModule
  ],
  exports:[
    BreadcrumbComponent
  ]
})
export class SharedModule { }
