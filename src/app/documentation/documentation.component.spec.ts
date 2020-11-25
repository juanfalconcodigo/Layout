import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationComponent } from './documentation.component';

describe('[DOCUMENTATION] DocumentationComponent', () => {
  let component: DocumentationComponent;
  let fixture: ComponentFixture<DocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentationComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toUser return is the scroll behavior configuration', () => {
    spyOn(document.getElementById("configuration"), 'scrollIntoView').and.callThrough();
    component.toConfifuration();
    expect(document.getElementById("configuration").scrollIntoView).toHaveBeenCalled();
  });

  /* it('should toUser return is the scroll behavior initialize', () => {
    const eleSpy = {
      scrollIntoView: jasmine.createSpy('eleSpy.scrollIntoView'),
    };
    spyOn(component.initialize.nativeElement, 'scrollIntoView').and.returnValue(eleSpy);
    
    component.toInitialize();
    expect(eleSpy.scrollIntoView).toHaveBeenCalledWith({behavior:'smooth'});
  }); */

});
