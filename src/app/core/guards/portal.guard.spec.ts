import { TestBed } from '@angular/core/testing';
import { PortalGuard } from './portal.guard';
import { PortalService } from '../services/portal.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, Params } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { of, throwError } from 'rxjs';

function fakeRouterState(url: string): RouterStateSnapshot {
  return {
    url,
  } as RouterStateSnapshot;
}

function fakeActivatedRoute(url: any): ActivatedRouteSnapshot {
  return {
    params: url,
  } as ActivatedRouteSnapshot;
}

describe('[GUARD] PortalGuard', () => {
  let guard: PortalGuard;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };
  const dummyRoute = {} as ActivatedRouteSnapshot;
  const dummyRouteState = {} as RouterStateSnapshot;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        PortalGuard,
        PortalService,
        { provide: Router, useValue: routerSpy }
      ]
    });
    guard = TestBed.inject(PortalGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });



  it('should success access when user is logged', () => {
    const dataFake = {
      enterpriseId: "156428562748",
      offshore: "Y",
      portals: [{ name: "FEEDBACK", id: 10 }, { name: "EUROPA_WEB", id: 20 }, { name: "TEST", id: 9 }],
      roles: ["FEEDBACK_ADMIN", "EUROPA_WEB_USER"],
      userName: "Anonymus"
    }
    spyOn(guard._portalService, 'getPortal').and.returnValue(of(dataFake));

    guard.canActivate(fakeActivatedRoute({ param: 'FEEDBACK' }), dummyRouteState).subscribe(canActivate => {
      expect(canActivate).toBeTruthy();
    });

  });





  /* This test fails */
  it('should return false when not authenticated', () => {
    spyOn(guard._portalService, 'getPortal').and.returnValue(throwError({ error: 'error' }));
    guard.canActivate(fakeActivatedRoute({ param: 'FEEDBACK' }), dummyRouteState).subscribe(canActivate => {
      expect(canActivate).toBeFalsy();
    });
  });
});
