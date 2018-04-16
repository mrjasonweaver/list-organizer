import { Contact } from '../models/contacts';
import { Action } from '../actions/contacts';

// reducer
export function contactsReducer(state: Contact[], action: Action): Contact[] {
  switch (action.type) {
    case 'CONTACTS_UPDATED': {
      return [...action.payload];
    }
    default: {
      return state;
    }
  }
}
