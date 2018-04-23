import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IContact } from '../../models/contacts';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.css']
})

/**This is the stateless component for contacts data table.
 * Application State, UI Constants, and local state is
 * passed down to dumb, stateless presenter components (@Input).
 * UI events are passed back up via event emitters (@Output).
 */
export class ContactsTableComponent {

  /**State */
  @Input() contacts: IContact[];
  @Input() displayedColumns: String[];
  @Input() pageEvent: PageEvent;
  // events
  @Output() showContact: EventEmitter<string> = new EventEmitter<string>();
  @Output() routeToPage: EventEmitter<number> = new EventEmitter<number>();

  /**UI Constants | Translation */
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

  /**Change route query params so we can load paginated page with ngrx effects
   * @param {string} id The id of a single contact.
   * @return Event emitted for showing a single contact.
   */
  onShowContact(id: string) {
    return this.showContact.emit(id);
  }

  /**Change route query params so we can load paginated page with ngrx effects
   * @param {number} page The current page in data table.
   * @return Event emitted for pagination.
   */
  onRouteToPage(page: number) {
    return this.routeToPage.emit(page);
  }

}
