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
  private role$: Observable<string>;
  private organization$: Observable<string>;
  private phone$: Observable<string>;
  private status$: Observable<boolean>;

  constructor(private store: Store<ContactState>) { }

  ngOnInit() {
    this.firstName$ = this.store.select(fromRoot.selectContactFirstName);
    this.lastName$ = this.store.select(fromRoot.selectContactLastName);
    this.email$ = this.store.select(fromRoot.selectContactEmail);
    this.role$ = this.store.select(fromRoot.selectContactRole);
    this.organization$ = this.store.select(fromRoot.selectContactOrganization);
    this.phone$ = this.store.select(fromRoot.selectContactPhone);
    this.status$ = this.store.select(fromRoot.selectContactStatus);
  }

}
