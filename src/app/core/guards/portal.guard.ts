import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { PortalService } from '../services/portal.service';

@Injectable()
export class PortalGuard implements CanActivate, CanLoad {
  constructor(private _portalService: PortalService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.validateAuthorization(route);
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.validateAuthorization(route);
  }

  validateAuthorization(route: Route | ActivatedRouteSnapshot): any {
    const access = route.data['access'] as Array<string>;
    if (this._portalService.getUserPortal()) {
      const newArray = this._portalService.getUserPortal().map((e) => {
        return e.name;
      })
      if (newArray.includes(access[0])) {
        console.log('Success Access');
        return true;
      }
      console.log('Not Access');
      return false;
    } else {
      console.log('Not Access');
      this.router.navigate(['inbox']);
      return false;
    }

  }



}
