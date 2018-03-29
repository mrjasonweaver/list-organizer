import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruncatedValueComponent } from './truncated-value.component';

describe('TruncatedValueComponent', () => {
  let component: TruncatedValueComponent;
  let fixture: ComponentFixture<TruncatedValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruncatedValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruncatedValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
