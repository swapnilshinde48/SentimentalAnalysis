import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectivityComponent } from './subjectivity.component';

describe('SubjectivityComponent', () => {
  let component: SubjectivityComponent;
  let fixture: ComponentFixture<SubjectivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
