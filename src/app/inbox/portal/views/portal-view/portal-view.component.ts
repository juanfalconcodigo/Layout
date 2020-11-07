import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { FeedbackService } from '../../../../core/services/feedback.service';
import { setBreadCrumb, setSearch } from '../../../store/inbox.actions';
import { pluck } from 'rxjs/operators';

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
  //refesh
  refresh: any = null;

  constructor(public _feedbackService: FeedbackService, private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.show = true;
    this.feedBackResponseListSubscription = this._feedbackService.getFeedBack(0).subscribe((resp: any) => {
      this.feedBackResponseList = resp;
      this.feedBackResponse=resp.content[0];
      if (this.feedBackResponseList) {
        this.show = false
      }
      //change refecth
      this.store.dispatch(setSearch({ search: 'getFeedBack-0' }));
    });

    this.route.params.subscribe((resp) => {
      this.store.dispatch(setBreadCrumb({ breadcrumb: resp.param }));
    });


    this.store.select('portal').pipe(pluck('refresh')).subscribe((resp) => {
      
      if (resp) {
        const [type, param] = resp.split('-');
        console.log('refresh portal', type, param);
        switch (type) {
          case 'newFeedBackResponseList':
            this.show=true;
            setTimeout(()=>{
            this.newFeedBackResponseList(param);
            this.show=false;
            },1000)
            return;
          default: this.feedBackResponse;
        }
      }
    })


  }

  ngOnDestroy(): void {
    this.feedBackResponseListSubscription.unsubscribe();
    if (this.feedBackResponseSubscription) this.feedBackResponseSubscription.unsubscribe();
    this.store.dispatch(setBreadCrumb({ breadcrumb: '' }));
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
      //change refecth
      this.store.dispatch(setSearch({ search: `getFeedBackById-${event}` }));
    });

  }

  newFeedBackResponseList(page: any) {
    this.feedBackResponseListSubscription = this._feedbackService.getFeedBack(page).subscribe((resp) => {
      this.feedBackResponseList = resp;
      console.log(this.feedBackResponseList);
      //change refecth
      this.store.dispatch(setSearch({ search: `newFeedBackResponseList-${page}` }));
    });
  }


  changeRefresh() {

  }

}
