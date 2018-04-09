import { Component, OnInit } from '@angular/core';
import { Router, Params } from "@angular/router";
import { ContactsState, Contact } from "../../models/contacts";
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
  private contacts$: Observable<{contacts: { [id: number]: Contact }}>;

  constructor(private contactsService: ContactsService, private router: Router) { }

  ngOnInit() {
    this.contactsService.findContacts().share().map( res => this.contacts$ = res );
  }

}
