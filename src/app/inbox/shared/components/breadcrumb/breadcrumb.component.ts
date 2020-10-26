import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { pluck } from 'rxjs/operators';
import { AppState } from 'src/app/app.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumb:Observable<string>;
  constructor(private store:Store<AppState>) { }
  
  ngOnInit(): void {
    this.breadcrumb=this.store.select('inbox').pipe(pluck('breadcrumb'));
  }

}
