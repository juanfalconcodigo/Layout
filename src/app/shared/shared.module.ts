import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; */
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
//imageslider
import { NgImageSliderModule } from 'ng-image-slider';
//code mirror
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
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
    NgbDropdownModule,
    NgbModalModule,
    NgImageSliderModule,
    CodemirrorModule
  ]
})
export class SharedModule { }
