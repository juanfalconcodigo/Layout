import { SimpleChange, Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentComponent } from './content.component';
import { HttpClientModule } from '@angular/common/http';



@Component({
  template: `<app-content [feedBackResponse]="{
    answers: [],
    browserName: 'Chrome',
    portal: { portalId: 1, portalHost: 'https://anoymus:8080', portalName: 'FEEDBACK', apiKey: 'cbkehckjndkcnd,cnllñlk/mlblgjbok//mngk', active: 'Y' }}"></app-content>`,
})
export class TestWrapperComponent {
  feedBackResponse: any;


  /*  {
     answers: [],
     browserName: "Chrome",
     browserVersion: "76.26.87.45",
     createDate: "",
     extraParams: [
       {
         key: "email",
         value: "anonymus@gmail.com"
       }
     ],
     fakeImage: "https://blog.naturlider.com/wp-content/uploads/2020/03/AdobeStock_309195144-post-dia-mundial-naturaleza.jpeg",
     feedbackItemId: 1421,
     feedbackType: { feedbackTypeId: 11, name: "test" },
     jiraIssueId: null,
     loginId: "bchjh",
     moduleName: "/feedback-admin/FEEDBACK/inbox",
     offshore: "N",
     operatingSystemName: "Windows",
     operatingSystemVersion: "Nt 40",
     pageUrl: "https://anoymus/feedback-admin/FEEDBACK/inbox",
     portal: { portalId: 1, portalHost: "https://anoymus:8080", portalName: "FEEDBACK", apiKey: "cbkehckjndkcnd,cnllñlk/mlblgjbok//mngk", active: "Y" },
     status: "Read",
     userAgent: "Mozila jyddodm djfdfnn",
     userComment: "testing 1"
   }; */

}

describe('[INBOX] ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;
  let componentParent: TestWrapperComponent;
  let fixtureParent: ComponentFixture<TestWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [ContentComponent, TestWrapperComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixtureParent = TestBed.createComponent(TestWrapperComponent);
    componentParent = fixtureParent.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  /*   it('should onChanges success', () => {
      let prev_value = "old";
      let new_value = "new";
      let is_first_change: boolean = true;
      component.ngOnChanges({ prop1: new SimpleChange(prev_value, new_value, is_first_change) });
      fixture.detectChanges();
      expect(true).toBeTruthy();
    }); */

  it('should be test ngOnChanges success', () => {
    componentParent.feedBackResponse = {
      answers: [],
      browserName: "Chrome",
      portal: { portalId: 1, portalHost: "https://anoymus:8080", portalName: "FEEDBACK", apiKey: "cbkehckjndkcnd,cnllñlk/mlblgjbok//mngk", active: "Y" }
    };
    fixtureParent.detectChanges();
    const content = fixture.debugElement.nativeElement.textContent;
    expect(content).toContain('Filter By: FeedBackIdContentFilter3🍳ReportsExportsSettings');
  });
});
