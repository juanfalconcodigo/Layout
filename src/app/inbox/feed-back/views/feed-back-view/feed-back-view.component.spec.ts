import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedBackViewComponent } from './feed-back-view.component';

describe('FeedBackViewComponent', () => {
  let component: FeedBackViewComponent;
  let fixture: ComponentFixture<FeedBackViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedBackViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedBackViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
