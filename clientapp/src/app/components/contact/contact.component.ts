import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contacts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

/**This is the stateless component for a single contact.
 * Application State, UI Constants, and local state is
 * passed down to dumb, stateless presenter components (@Input).
 * UI events are passed back up via event emitters (@Output).
 */
export class ContactComponent {
  /**State */
  @Input() contact: Contact;
  @Input() editContact: Contact;
  // events
  @Output() submitContact = new EventEmitter();

  /**UI Constants | Translation */
  // labels
  @Input() firstNameLabel: string;
  @Input() lastNameLabel: string;
  @Input() emailLabel: string;
  @Input() phoneLabel: string;
  @Input() statusLabel: string;
  @Input() roleLabel: string;
  @Input() organizationLabel: string;
  // Titles
  @Input() selectedContactTitleText: string;

  onSubmitContact(formValue) {
    return this.submitContact.emit(formValue);
  }
}
