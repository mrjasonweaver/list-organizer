import { RouterAction } from '@ngrx/router-store';
import { IContact, IContactsState, IContactState } from '../models/contacts';
import { IState } from '../models';
// actions
export interface IContactsUpdated { type: 'CONTACTS_UPDATED'; payload: IContactsState; }
export interface IContactUpdated { type: 'CONTACT_UPDATED'; payload: IContactState; }
export type Action = RouterAction<IState> | IContactsUpdated | IContactUpdated;
