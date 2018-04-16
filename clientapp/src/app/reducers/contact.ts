import { Contact, ContactState } from '../models/contacts';
import { Action } from '../actions/contacts';

// reducer
export function contactReducer(state: Contact, action: Action): Contact {
  switch (action.type) {
    case  'CONTACT_UPDATED': {
      return {...action.payload};
    }
    default: {
      return state;
    }
  }
}
