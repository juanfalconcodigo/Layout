import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { FeedbackService } from '../../../../core/services/feedback.service';
import { setBreadCrumb } from '../../../store/inbox.actions';

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
  show: boolean = true;

  constructor(public _feedbackService: FeedbackService,private store:Store<AppState>,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.show = true;
    this.feedBackResponseListSubscription = this._feedbackService.getFeedBack(0).subscribe((resp: any) => {
      this.feedBackResponseList = resp;
      if (this.feedBackResponseList) {
        this.show = false
      }
    });

    this.route.params.subscribe((resp)=>{
      this.store.dispatch(setBreadCrumb({breadcrumb:resp.param}));
    })


  }

  ngOnDestroy(): void {
    this.feedBackResponseListSubscription.unsubscribe();
    if (this.feedBackResponseSubscription) this.feedBackResponseSubscription.unsubscribe();
    this.store.dispatch(setBreadCrumb({breadcrumb:''}));
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
      console.log(this.feedBackResponseList);
    });
  }

}
