import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; */
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
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
    NgbDropdownModule
    /* NgbModule, */
  ]
})
export class SharedModule { }
