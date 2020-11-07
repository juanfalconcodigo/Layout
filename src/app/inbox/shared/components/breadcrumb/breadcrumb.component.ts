import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { pluck } from 'rxjs/operators';
import { AppState } from 'src/app/app.reducer';
import { Observable, Subscription } from 'rxjs';
import { setRefresh } from '../../../portal/views/store/portal.actions';



@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  breadcrumb: Observable<string>;
  refresh: string = null;
  refreshSubscription: Subscription = null;
  show: boolean = false;

  constructor(private store: Store<AppState>) { }


  ngOnInit(): void {
    this.breadcrumb = this.store.select('inbox').pipe(pluck('breadcrumb'));
    this.refreshSubscription = this.store.select('inbox').pipe(pluck('search')).subscribe((resp: string) => {
      this.refresh = resp;
      console.log('search',this.refresh);
    });

  }

  emitRefecth() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
      this.store.dispatch(setRefresh({ refresh: this.refresh }));
    }, 500);
  }


  ngOnDestroy(): void {
    this.refreshSubscription && this.refreshSubscription.unsubscribe();
  }

}
