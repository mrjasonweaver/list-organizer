import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contacts';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.css']
})
export class ContactsTableComponent {

  @Input() contacts: Contact[];
  @Input() displayedColumns: String[];
  @Input() pageEvent: PageEvent;
  @Output() showContact: EventEmitter<string> = new EventEmitter<string>();
  @Output() routeToPage: EventEmitter<number> = new EventEmitter<number>();

  onShowContact(id: string) {
    this.showContact.emit(id);
  }

  onRouteToPage(page) {
    this.routeToPage.emit(page);
  }

}
