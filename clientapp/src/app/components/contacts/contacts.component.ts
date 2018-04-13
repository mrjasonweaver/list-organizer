import { Component, OnInit, Input } from '@angular/core';
import { ContactsState, Contact } from "../../models/contacts";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import * as fromRoot from '../../selectors/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  private contacts$: Observable<Contact[]>;
  displayedColumns = ['lastName', 'firstName', 'email', 'role', 'organization', 'phone', 'status'];

  constructor(private store: Store<ContactsState>) { }

  ngOnInit() {
    this.contacts$ = this.store.select(state => state.contacts);
  }
}
