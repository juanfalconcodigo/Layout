import { Component, OnInit,OnDestroy } from '@angular/core';
import { PortalService } from 'src/app/core/services/portal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.scss']
})
export class MenuViewComponent implements OnInit,OnDestroy {
  portalInfo: any = null;
  portalInfoSubscription: Subscription = null;
  constructor(private _portalService: PortalService) { }

  ngOnInit(): void {
    this.portalInfoSubscription = this._portalService.getPortal().subscribe((resp) => {
      this.portalInfo = resp;
    },
      (err) => console.log(err));
  }

  ngOnDestroy(): void {
    if(this.portalInfoSubscription)this.portalInfoSubscription.unsubscribe();
  }

}
