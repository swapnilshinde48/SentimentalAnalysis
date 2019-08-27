import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectivityConfidenceComponent } from './subjectivity-confidence.component';

describe('SubjectivityConfidenceComponent', () => {
  let component: SubjectivityConfidenceComponent;
  let fixture: ComponentFixture<SubjectivityConfidenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectivityConfidenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectivityConfidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
