import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IContactsState, IContact } from '../../models/contacts';
import { IAppState } from '../../models';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as contactSelector from '../../selectors/contact';
import * as contactsSelector from '../../selectors/contacts';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

/**This is the state container for contacts.
 * Application State, UI Constants, and local state is
 * passed down to dumb, stateless presenter components (@Input).
 * UI events are passed back up via event emitters (@Output).
 */
export class ContactsComponent implements OnInit, OnDestroy, OnChanges {
  /**State */
  private contactsObject$: Observable<IContactsState>;
  private contacts$: Observable<IContact[]>;
  private contacts: IContactsState;
  private pageNumber$: Observable<number>;
  private contact$: Observable<IContact>;
  private firstName$: Observable<string>;

  /**UI Constants | Translation */
  // Labels
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
  private selectedContactTitleText = 'Edit Contact';
  private contactsTableTitleText = 'Contacts';

  /**Local container state */
  private pageEvent: PageEvent = { pageSize: 4, pageIndex: 0, length: 8 };
  private id: string;
  private page: number;
  private displayedColumns = ['lastName', 'firstName', 'role', 'organization', 'phone', 'action'];
  private editContact: FormGroup;
  private progressState: boolean;
  private isSelected: boolean;
  // subscriptions
  private contactSubscription: Subscription;
  private firstNameSubscription: Subscription;
  private pageSubscription: Subscription;

  constructor(
    private store: Store<IAppState>,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  /**Get state from store */
  ngOnInit() {
    this.contactsObject$ = this.store.select(contactsSelector.selectContacts);
    this.contacts$ = this.store.select(contactsSelector.selectContactsList);
    this.pageNumber$ = this.store.select(contactsSelector.selectContactsPageNumber);
    this.contact$ = this.store.select(contactSelector.selectContact);
    this.firstName$ = this.store.select(contactSelector.selectContactFirstName);

    this.editContact = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      status: ['', Validators.required],
      role: [{value: '', disabled: true}, Validators.required],
      organization: [{value: '', disabled: true}, Validators.required]
    });
    this.firstNameSubscription = this.firstName$.subscribe(data => {
      const firstName: any = data;
      const value: boolean = firstName !== undefined ? true : false;
      return this.isSelected = value;
    });
    this.contactSubscription = this.contact$.subscribe(data => this.editContact.patchValue(data));
    //this.pageSubscription = this.pageNumber$.subscribe(resp => this.page = resp);
  }

  ngOnChanges() {
    
  }

  ngOnDestroy() {
    this.firstNameSubscription.unsubscribe();
    this.contactSubscription.unsubscribe();
    // this.pageSubscription.unsubscribe();
  }

  submitContact() {
    this.progressState = true;
    setTimeout( () => {
      console.table(this.editContact.value);
      console.log("Valid", this.editContact.valid);
      this.snackBar.open('Contact Saved', null, {
        duration: 2000,
      });
      this.progressState = false;
      return this.routeToContactList(this.page);
    }, 1500);
  }

  /**Change route query params so we can load selected contact with ngrx effects.
   * @param {string} id The id of a single contact.
   * @return Router navigates to /contacts?selected={id}?page={page}.
   */
  getContact(id: string, page: number) {
    return this.router.navigate(['/contacts'], { queryParams: { selected: id, page } });
  }

  /**Keep page in sync by storing in component state
   * Change route query params so we can load paginated page with ngrx effects
   * @param {number} page The id of a single contact.
   * @return Router navigates to /contacts?page={page}.
   */
  getPage(page: number) {
    return this.router.navigate(['/contacts'], { queryParams: { page } });
  }

  /**Change route to contacts list and current page.
   * @return Router navigates to /contacts?page={this.page}.
   */
  routeToContactList(page: number) {
    return this.router.navigate(['/contacts'], { queryParams: { page } });
  }
}
