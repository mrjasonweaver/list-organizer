import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsImmutableComponent } from './ts-immutable.component';

describe('TsImmutableComponent', () => {
  let component: TsImmutableComponent;
  let fixture: ComponentFixture<TsImmutableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsImmutableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsImmutableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
