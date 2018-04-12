import { Component, OnInit } from '@angular/core';
import { ContactsState, Contact } from "../../models/contacts";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  private contacts$: Observable<Contact[]>;
  displayedColumns = ['lastName', 'firstName', 'email'];

  constructor(private store: Store<ContactsState>) { }

  ngOnInit() {
    return this.contacts$ = this.store.select(state => state.contacts);
  }
}
