import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxTestingComponent } from './ngrx-testing.component';

describe('NgrxTestingComponent', () => {
  let component: NgrxTestingComponent;
  let fixture: ComponentFixture<NgrxTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
