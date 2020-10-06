import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';



@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    CommonModule
  ],
  exports:[
    BreadcrumbComponent
  ]
})
export class SharedModule { }
