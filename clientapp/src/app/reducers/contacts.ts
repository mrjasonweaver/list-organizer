import { Contact, ContactsState } from '../models/contacts';
import { Action } from '../actions/contacts';

// reducer
export function contactsReducer(state: ContactsState, action: Action): ContactsState {
  switch (action.type) {
    case 'CONTACTS_UPDATED': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}