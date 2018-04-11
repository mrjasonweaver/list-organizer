import { RouterAction } from '@ngrx/router-store';
import { Contact } from '../models/contacts';
import { State } from '../models';
// actions
export type ContactsUpdated = { type: 'CONTACTS_UPDATED', payload: { contacts: Contact[] }};
export type ContactUpdated = { type: 'CONTACT_UPDATED', payload: Contact };
export type Action = RouterAction<State> | ContactsUpdated | ContactUpdated;