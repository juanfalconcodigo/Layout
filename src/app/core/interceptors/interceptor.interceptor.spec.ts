import { TestBed } from '@angular/core/testing';
import { InterceptorInterceptor as Interceptor } from './interceptor.interceptor';
import { PortalService } from '../services/portal.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from 'src/environments/environment';

describe('InterceptorInterceptor', () => {
  let interceptor: Interceptor;
  let service: PortalService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        PortalService,
         {
           provide: HTTP_INTERCEPTORS,
           useClass: Interceptor,
           multi: true,
         },
        Interceptor
      ]
    });
    interceptor = TestBed.inject(Interceptor);
    service = TestBed.inject(PortalService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {

    expect(interceptor).toBeTruthy();
  });

  it('should added header in request', () => {
    service.getPortal().subscribe((resp) => {
      expect(resp).toBeTruthy();
    });
    const httpRequest = httpMock.expectOne(`${environment.backendUrl}/portal`);
    expect(httpRequest.request.headers.has('token')).toEqual(true);

  });



});
