import { Contact, ContactsState } from '../models/contacts';
import { Action } from '../actions/contacts';

// reducer
export function contactsReducer(state: ContactsState, action: Action): ContactsState {
  switch (action.type) {
    case 'CONTACTS_UPDATED': {
      return action.payload;
    }
    // case  'CONTACT_UPDATED': {
    //   const contacts = {...state.contacts};
    //   contacts[action.payload.id] = action.payload;
    //   return {...state, contacts};
    // }
    default: {
      return state;
    }
  }
}