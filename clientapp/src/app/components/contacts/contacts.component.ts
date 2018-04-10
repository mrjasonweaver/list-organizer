import { Component, OnInit } from '@angular/core';
import { Router, Params } from "@angular/router";
import { ContactsState, Contact } from "../../models/contacts";
import { State } from "../../models";
import { ContactsService } from "../../services/contacts.service";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  private contacts$: Observable<Contact[]>;

  constructor(private contactsService: ContactsService, private router: Router) { }

  ngOnInit() {
    this.loadContacts;
  }

  public get loadContacts() {
    return this.contacts$ = this.contactsService.findContacts();
  }
}
