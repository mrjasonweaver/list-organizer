import { RouterAction } from '@ngrx/router-store';
import { Contact, ContactsState } from '../models/contacts';
import { State } from '../models';
// actions
export interface ContactsUpdated { type: 'CONTACTS_UPDATED'; payload: ContactsState; }
export interface ContactUpdated { type: 'CONTACT_UPDATED'; payload: Contact; }
export type Action = RouterAction<State> | ContactsUpdated | ContactUpdated;
