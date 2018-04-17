/* 
 * This is the state container for contacts
 * All state is managed in this container
 * State is feed down to the dumb stateless presenter components (@Input)
 * UI events are passed back up via event emitters (@Output)
 */


import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsState, Contact } from '../../models/contacts';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../../selectors/contact';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  /* ---- State ---- */
  private contacts$: Observable<Contact[]>;
  private firstName$: Observable<string>;
  private lastName$: Observable<string>;
  private email$: Observable<string>;
  private role$: Observable<string>;
  private organization$: Observable<string>;
  private phone$: Observable<string>;
  private status$: Observable<boolean>;

  /* ---- UI Constants | Translation ---- */
  // labels
  private firstNameLabel = 'First Name';
  private lastNameLabel = 'Last Name';
  private emailLabel = 'Email';
  private phoneLabel = 'Phone Number';
  private statusLabel = 'Status';
  private roleLabel = 'Role';
  private organizationLabel = 'Organization';
  private actionLabel = 'Action';
  private editLabel = 'edit';
  // Titles
  private selectedContactTitleText = 'Selected Contact';
  private contactsTableTitleText = 'Contacts';

  /* ---- Local container state ---- */
  private pageEvent: PageEvent = { pageSize: 4, pageIndex: 0, length: 8};
  private page = 1;
  private id: string;
  private displayedColumns = ['lastName', 'firstName', 'role', 'organization', 'phone', 'action'];

  constructor(private store: Store<ContactsState>, private router: Router) { }

  ngOnInit() {
    // get state from store
    this.contacts$ = this.store.select(state => state.contacts);
    this.firstName$ = this.store.select(fromRoot.selectContactFirstName);
    this.lastName$ = this.store.select(fromRoot.selectContactLastName);
    this.email$ = this.store.select(fromRoot.selectContactEmail);
    this.role$ = this.store.select(fromRoot.selectContactRole);
    this.organization$ = this.store.select(fromRoot.selectContactOrganization);
    this.phone$ = this.store.select(fromRoot.selectContactPhone);
    this.status$ = this.store.select(fromRoot.selectContactStatus);
  }

  getContact(id: string) {
    // change route query params so we can load selected contact with ngrx effects
    this.router.navigate(['/contacts'], { queryParams: { selected: id, page: this.page } });
  }

  routeToContactList() {
    // change route to contacts list
    this.router.navigate(['/contacts'], { queryParams: { page: this.page } });
  }

  getPage(page: number) {
    // keep page in sync by storing in component state
    this.page > 0 ? this.page = page : this.page = 1;
    // change route query params so we can load paginated page with ngrx effects
    this.router.navigate(['/contacts'], { queryParams: { page } });
  }
}
