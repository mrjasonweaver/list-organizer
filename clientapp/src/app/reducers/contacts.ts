import { Contact, ContactsState } from '../models/contacts';
import { Action } from '../actions/contacts';
import 'rxjs/add/operator/filter';

// reducer
export function contactsReducer(state: ContactsState, action: Action): ContactsState {
  switch (action.type) {
    case 'CONTACTS_UPDATED': {
      return action.payload;
    }
    case  'CONTACT_UPDATED': {
      const contacts = state;
      return contacts;
      // return contacts.filter(x => x.id === action.payload.id);
    }
    default: {
      return state;
    }
  }
}