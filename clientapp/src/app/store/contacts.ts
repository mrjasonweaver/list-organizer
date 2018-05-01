import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, RouterEvent, Event, NavigationEnd } from '@angular/router';
import { ContactsService } from '../services/contacts.service';
import { IContact, IContactsState } from '../models/contacts';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ContactsStore {

  private _contacts: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private contactsService: ContactsService, private router: Router, private events: RouterEvent) {
    this.loadInitialData();
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('NavigationEnd:', event);
      }
    });
  }

  get contacts$() {
    return this._contacts.asObservable();
  }

  loadInitialData() {
    this.contactsService.findContacts().subscribe(res => this._contacts.next(res.contacts),
      err => console.log('Error retrieving Contacts')
    );
  }

}
