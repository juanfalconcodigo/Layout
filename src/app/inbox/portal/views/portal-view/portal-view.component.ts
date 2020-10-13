import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FeedbackService } from '../../../../core/services/feedback.service';
@Component({
  selector: 'app-portal-view',
  templateUrl: './portal-view.component.html',
  styleUrls: ['./portal-view.component.scss']
})
export class PortalViewComponent implements OnInit, OnDestroy {
  feedBackResponseListSubscription: Subscription = null;
  feedBackResponseSubscription: Subscription = null;
  feedBackResponseList: any = null;
  feedBackResponse: any = null;
  hack: any = null;

  constructor(public _feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.feedBackResponseListSubscription = this._feedbackService.getFeedBack(0).subscribe((resp: any) => {
      this.feedBackResponseList = resp;
    });

  }

  ngOnDestroy(): void {
    this.feedBackResponseListSubscription.unsubscribe();
    if (this.feedBackResponseSubscription) this.feedBackResponseSubscription.unsubscribe();
  }

  feedSelect(event: number) {
    console.log(this.hack, event)
    if (this.hack == event) {
      return;
    }
    //you can wrap in a setTimeOut if you want 800ms
    this.feedBackResponseSubscription = this._feedbackService.getFeedBackById(event).subscribe((resp) => {
      this.feedBackResponse = resp[0];
      console.log(this.feedBackResponse);
      this.hack = event;
    });

  }

  newFeedBackResponseList(page: number) {
    this.feedBackResponseListSubscription = this._feedbackService.getFeedBack(page).subscribe((resp) => {
      this.feedBackResponseList = resp;
      console.log(this.feedBackResponseList)
    });
  }

}
