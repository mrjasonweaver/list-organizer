import { Component, OnInit } from '@angular/core';
import { ContactState, Contact } from "../../models/contacts";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import * as fromRoot from '../../selectors/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private firstName$: Observable<string>;
  private lastName$: Observable<string>;
  private email$: Observable<string>;

  constructor(private store: Store<ContactState>) { }

  ngOnInit() {
    this.firstName$ = this.store.select(fromRoot.selectContactFirstName);
    this.lastName$ = this.store.select(fromRoot.selectContactLastName);
    this.email$ = this.store.select(fromRoot.selectContactEmail);
  }

}
