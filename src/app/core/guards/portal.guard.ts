import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, pluck, take } from 'rxjs/operators';
import { PortalService } from '../services/portal.service';

@Injectable()
export class PortalGuard implements CanActivate, CanLoad {
  constructor(public _portalService: PortalService, public router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.validateAuthorization(route);
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(route);
      const access = segments[1].path;
      console.log(access);
      return true;
     /*  return this.validateAuthorization(route); */
  }

  validateAuthorization(route: ActivatedRouteSnapshot | Route | any): Observable<boolean> {
    const access = route.params['param'];
    console.log(access);
    return this._portalService.getPortal().pipe(take(1), pluck('portals'),map((resp:any)=> {
      const newArray = resp.map((e) => {
        return e.name;
      });
      console.log(newArray, access)
      if (newArray.includes(access)) {
        console.log('Success Access');
        return true;
      } else {
        console.log('Not Access');
        this.router.navigate(['inbox']);
        return false;
      }
    }),catchError((err) => {
      this.router.navigate(['/login']);
      return of(false);
    }));
  }



}
