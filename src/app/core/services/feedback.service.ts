import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { filter, map, pluck, tap } from 'rxjs/operators';
import {DATA_FEEDS, FeedBackResponseFake} from '../utils/responseDataFake';
@Injectable()
export class FeedbackService {

  constructor() { }

  getFeedBack(){
    return FeedBackResponseFake;
  }

  getFeedBackById(id:number){
    return from(FeedBackResponseFake.content).pipe(filter((data,i)=>data['feedbackItemId']===id));
  }


}
