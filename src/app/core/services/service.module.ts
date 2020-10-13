import { NgModule } from '@angular/core';
import { FeedbackService } from './feedback.service';
import { PortalService } from './portal.service';


@NgModule({
  providers:[
    FeedbackService,
    PortalService
  ]
})
export class ServiceModule { }
