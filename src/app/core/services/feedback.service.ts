import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import {environment} from 'src/environments/environment';

@Injectable()
export class FeedbackService {

  constructor(private http:HttpClient) { }

  getFeedBack(page:number){
    return this.http.get(`${environment.backendUrl}/feedbacks/?page=${page}`).pipe(shareReplay());
  }

  getFeedBackById(id:number){
    return this.http.get(`${environment.backendUrl}/feedbacks/${id}`).pipe(shareReplay());
  }


}
