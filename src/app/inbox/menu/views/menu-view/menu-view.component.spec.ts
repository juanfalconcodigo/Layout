import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuViewComponent } from './menu-view.component';
import { PortalService } from '../../../../core/services/portal.service';
import { HttpClientModule } from '@angular/common/http';
import { of, throwError } from 'rxjs';

describe('MenuViewComponent', () => {
  let component: MenuViewComponent;
  let fixture: ComponentFixture<MenuViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuViewComponent],
      imports: [
        HttpClientModule
      ],
      providers: [
        PortalService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get portal service fine get info user', () => {
    const portalsResponseFake = {
      portals: [{
        'name': 'FEEDBACK',
        'id': 10
      },
      {
        'name': 'EUROPA_WEB',
        'id': 20
      },

      {
        'name': 'TEST',
        'id': 9
      }
      ],
      roles: [
        'FEEDBACK_ADMIN',
        'EUROPA_WEB_USER'
      ],
      enterpriseId: '156428562748',
      userName: 'Anonymus',
      offshore: 'Y'
    }
    spyOn(component._portalService, 'getPortal').and.returnValue(of(portalsResponseFake));
    component.getInfoUser();
    expect(component.loadData).toBeTruthy();
    expect(component.portalInfo).toEqual(portalsResponseFake);
  });



  it('should country service error get users', () => {
    spyOn(component._portalService, 'getPortal').and.returnValue(throwError({error:'error'}));
    component.getInfoUser();
    expect(component.loadData).toBeFalsy();
    expect(component.portalInfo).toEqual(null);
  });
});
