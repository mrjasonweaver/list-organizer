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
  private contacts$: Observable<Contact[]>;
  private firstName$: Observable<string>;
  private lastName$: Observable<string>;
  private email$: Observable<string>;
  private role$: Observable<string>;
  private organization$: Observable<string>;
  private phone$: Observable<string>;
  private status$: Observable<boolean>;
  private pageEvent: PageEvent = { pageSize: 4, pageIndex: 0, length: 8};
  firstNameLabel: string = 'First Name';
  lastNameLabel: string = 'Last Name';
  emailLabel: string = 'Email';
  phoneLabel: string = 'Phone Number';
  statusLabel: string = 'Status';
  roleLabel: string = 'Role';
  organizationLabel: string = 'Organization';
  page = 1;
  id: string;
  displayedColumns = ['lastName', 'firstName', 'role', 'organization', 'phone', 'action'];

  constructor(private store: Store<ContactsState>, private router: Router) { }

  ngOnInit() {
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
