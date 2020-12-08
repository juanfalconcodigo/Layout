import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowRouterComponent } from './arrow-router.component';

describe('ArrowRouterComponent', () => {
  let component: ArrowRouterComponent;
  let fixture: ComponentFixture<ArrowRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
