import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../../../core/services/feedback.service';

@Component({
  selector: 'app-feed-back-view',
  templateUrl: './feed-back-view.component.html',
  styleUrls: ['./feed-back-view.component.scss']
})
export class FeedBackViewComponent implements OnInit {
  feedBackResponseList: any = null;
  feedBackResponse:any=null;
  constructor(public _feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.feedBackResponseList = this._feedbackService.getFeedBack();
  }

  feedSelect(event:number){
    this._feedbackService.getFeedBackById(event).subscribe((resp) => {
      this.feedBackResponse=resp;
      console.log(this.feedBackResponse);
    })

  }

}
