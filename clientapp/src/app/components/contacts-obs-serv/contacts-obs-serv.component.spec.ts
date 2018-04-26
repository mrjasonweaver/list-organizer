import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsObsServComponent } from './contacts-obs-serv.component';

describe('ContactsObsServComponent', () => {
  let component: ContactsObsServComponent;
  let fixture: ComponentFixture<ContactsObsServComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsObsServComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsObsServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
