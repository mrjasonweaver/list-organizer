import { Http, URLSearchParams } from "@angular/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Contact } from "../models/contacts";

import 'rxjs/add/operator/map';
@Injectable()
export class ContactsService {
  private url = 'http://localhost:4444';

  constructor(private http: Http) {}

  findContacts(): Observable<{contacts: { [id: number]: Contact }}> {
    return this.http.get(`${this.url}/contacts`).map(r => r.json());
  }

  findContact(id: number): Observable<Contact> {
    const params = new URLSearchParams();
    params.set("id", id.toString());
    return this.http.get(`${this.url}/contact/`, {search: params}).map(r => r.json()['contact']);
  }
}
