import { RouterAction } from '@ngrx/router-store';
import { IContact, IContactsState, IContactState } from '../models/contacts';
import { IState } from '../models';
// actions
export interface ContactsUpdated { type: 'CONTACTS_UPDATED'; payload: IContactsState; }
export interface ContactUpdated { type: 'CONTACT_UPDATED'; payload: IContactState; }
export type Action = RouterAction<IState> | ContactsUpdated | ContactUpdated;
