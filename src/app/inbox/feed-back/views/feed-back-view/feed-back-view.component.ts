import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FeedbackService } from '../../../../core/services/feedback.service';
@Component({
  selector: 'app-feed-back-view',
  templateUrl: './feed-back-view.component.html',
  styleUrls: ['./feed-back-view.component.scss']
})
export class FeedBackViewComponent implements OnInit, OnDestroy {
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
