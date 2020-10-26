import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SharedModule as AppSharedModule } from 'src/app/shared/shared.module';
import { MessageComponent } from './components/message/message.component';
import { ContentComponent } from './components/content/content.component';
import { AdditionalComponent } from './components/additional/additional.component';
import { ExtraComponent } from './components/extra/extra.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [BreadcrumbComponent, MessageComponent, ContentComponent, AdditionalComponent, ExtraComponent, LoadingComponent],
  imports: [
    CommonModule,
    AppSharedModule
  ],
  exports:[
    BreadcrumbComponent,
    MessageComponent,
    ContentComponent,
    AdditionalComponent,
    ExtraComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
