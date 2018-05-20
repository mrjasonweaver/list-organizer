import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsInputComponent } from './obs-input.component';

describe('ObsInputComponent', () => {
  let component: ObsInputComponent;
  let fixture: ComponentFixture<ObsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObsInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
