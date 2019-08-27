import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolarityComponent } from './polarity.component';

describe('PolarityComponent', () => {
  let component: PolarityComponent;
  let fixture: ComponentFixture<PolarityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolarityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolarityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
