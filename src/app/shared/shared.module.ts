import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import {BreadcrumbModule} from 'angular-crumbs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule,
    BreadcrumbModule,
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
