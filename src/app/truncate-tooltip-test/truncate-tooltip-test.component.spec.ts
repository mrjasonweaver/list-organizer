import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruncateTooltipTestComponent } from './truncate-tooltip-test.component';

describe('TruncateTooltipTestComponent', () => {
  let component: TruncateTooltipTestComponent;
  let fixture: ComponentFixture<TruncateTooltipTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruncateTooltipTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruncateTooltipTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
