import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';
import { SharedModule as AppSharedModule } from 'src/app/shared/shared.module';
//ndv3
import 'd3';
import 'nvd3';

@NgModule({
  declarations: [DocumentationComponent],
  imports: [
    CommonModule,
    DocumentationRoutingModule,
    AppSharedModule,
  ]
})
export class DocumentationModule { }
