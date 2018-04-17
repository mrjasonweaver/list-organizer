import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contacts';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.css']
})
export class ContactsTableComponent {

  /* ----- State ---- */
  @Input() contacts: Contact[];
  @Input() displayedColumns: String[];
  @Input() pageEvent: PageEvent;
  // events
  @Output() showContact: EventEmitter<string> = new EventEmitter<string>();
  @Output() routeToPage: EventEmitter<number> = new EventEmitter<number>();

  /* ----- UI Constants | Translation ---- */
  // labels
  @Input() firstNameLabel: string;
  @Input() lastNameLabel: string;
  @Input() phoneLabel: string;
  @Input() roleLabel: string;
  @Input() organizationLabel: string;
  @Input() actionLabel: string;
  @Input() editLabel: string;
  // Titles
  @Input() contactsTableTitleText: string;

  onShowContact(id: string) {
    this.showContact.emit(id);
  }

  onRouteToPage(page) {
    this.routeToPage.emit(page);
  }

}
