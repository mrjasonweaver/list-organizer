import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ContactsState, Contact } from '../models/contacts';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {
  private url = 'http://localhost:4444';

  constructor(private http: HttpClient) {}

  findContacts(page: number): Observable<ContactsState> {
    const options = page ? { params: new HttpParams().set('page', page.toString()) } : {};
    const contacts = this.http.get<ContactsState>(`${this.url}/contacts`, options);
    return contacts;
  }

  findContact(id: number): Observable<Contact> {
    const options = id ? { params: new HttpParams().set('id', id.toString()) } : {};
    return this.http.get<Contact>(`${this.url}/contact/`, options).map(r => r['contact']);
  }
}
