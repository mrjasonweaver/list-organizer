import { Http, URLSearchParams } from "@angular/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ContactsState, Contact } from "../models/contacts";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class ContactsService {
  private url = 'http://localhost:4444';

  constructor(private http: Http) {}

  findContacts(page: number): Observable<Contact[]> {
    const params = new URLSearchParams();
    params.set("page", page.toString());
    const contacts = this.http.get(`${this.url}/contacts`, {search: params}).map(r => r.json()).map(c => c.contacts);
    return contacts;
  }

  findContact(id: number): Observable<Contact> {
    const params = new URLSearchParams();
    params.set("id", id.toString());
    return this.http.get(`${this.url}/contact/`, {search: params}).map(r => r.json()['contact']);
  }
}
