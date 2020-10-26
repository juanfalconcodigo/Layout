import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
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
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
