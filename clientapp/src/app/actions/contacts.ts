import { RouterAction } from '@ngrx/router-store';
import { Contact } from '../models/contacts';
import { State } from '../models';
// actions
export type ContactsUpdated = { type: 'CONTACTS_UPDATED', payload: Contact[] };
export type ContactUpdated = { type: 'CONTACT_UPDATED', payload: Contact };
export type ContactsPageUpdated = { type: 'CONTACTS_PAGE_UPDATED', payload: number };
export type Action = RouterAction<State> | ContactsUpdated | ContactUpdated | ContactsPageUpdated;