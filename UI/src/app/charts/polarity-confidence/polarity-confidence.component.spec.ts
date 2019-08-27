import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolarityConfidenceComponent } from './polarity-confidence.component';

describe('PolarityConfidenceComponent', () => {
  let component: PolarityConfidenceComponent;
  let fixture: ComponentFixture<PolarityConfidenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolarityConfidenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolarityConfidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
