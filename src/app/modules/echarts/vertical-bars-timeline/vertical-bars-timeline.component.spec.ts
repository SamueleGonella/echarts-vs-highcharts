import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalBarsTimelineComponent } from './vertical-bars-timeline.component';

describe('VerticalBarsTimelineComponent', () => {
  let component: VerticalBarsTimelineComponent;
  let fixture: ComponentFixture<VerticalBarsTimelineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerticalBarsTimelineComponent]
    });
    fixture = TestBed.createComponent(VerticalBarsTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
