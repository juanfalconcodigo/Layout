import { Component, OnInit, OnDestroy } from '@angular/core';
import { PortalService } from 'src/app/core/services/portal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.scss']
})
export class MenuViewComponent implements OnInit, OnDestroy {
  portalInfo: any = null;
  portalInfoSubscription: Subscription = null;
  loadData: boolean = false;
  constructor(public _portalService: PortalService) { }

  ngOnInit(): void {
    this.getInfoUser();
  }

  ngOnDestroy(): void {
    if (this.portalInfoSubscription) this.portalInfoSubscription.unsubscribe();
  }


  getInfoUser() {
    this.portalInfoSubscription = this._portalService.getPortal().subscribe((resp) => {
      this.portalInfo = resp;
      this.loadData = true
    },
      (err) => {
        console.log(err);
        this.loadData = false;
        this.portalInfo = null;
      });
  }

}
