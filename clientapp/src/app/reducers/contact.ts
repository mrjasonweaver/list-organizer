import { Contact, ContactState } from '../models/contacts';
import { Action } from '../actions/contacts';

// reducer
export function contactReducer(state: ContactState, action: Action): ContactState {
  switch (action.type) {
    case  'CONTACT_UPDATED': {
      // console.log('Contact Reducer', {...action.payload});
      return {...action.payload };
    }
    default: {
      return state;
    }
  }
}
