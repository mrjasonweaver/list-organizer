import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from "../../models/contacts";

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.css']
})
export class ContactsTableComponent {

  @Input() contacts: Contact[];
  @Input() displayedColumns: String[];
  @Output() showContact: EventEmitter<string> = new EventEmitter<string>();
  
  onShowContact(id: string) {
    this.showContact.emit(id);
  }

}
