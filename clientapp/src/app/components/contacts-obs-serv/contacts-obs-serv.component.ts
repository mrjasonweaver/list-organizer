import { Component, OnInit } from '@angular/core';
import { ContactsStore } from '../../store/contacts';
import { IContact } from '../../models/contacts';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-contacts-obs-serv',
  templateUrl: './contacts-obs-serv.component.html',
  styleUrls: ['./contacts-obs-serv.component.css']
})
export class ContactsObsServComponent {

  constructor(private contactsStore: ContactsStore) { }
  /**State */

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
  private id: string;
  private page: number;
  private displayedColumns = ['lastName', 'firstName', 'role', 'organization', 'phone', 'action'];

}
