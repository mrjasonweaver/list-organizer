import { Injectable } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { IContact, IContactsState } from '../models/contacts';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class ContactsStore {

  private _contacts: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private contactsService: ContactsService) {
    this.loadInitialData();
  }

  get contacts$() {
    return this._contacts.asObservable();
  }

  loadInitialData() {
    this.contactsService.findContacts(1)
      .subscribe( res => { 
        let contacts = res.contacts;
        this._contacts.next(contacts);
      },
        err => console.log("Error retrieving Todos")
      );

  }

}