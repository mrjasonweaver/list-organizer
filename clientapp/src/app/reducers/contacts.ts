import { IContactsState } from '../models/contacts';
import { Action } from '../actions/contacts';

// reducer
export function contactsReducer(state: IContactsState, action: Action): IContactsState {
  switch (action.type) {
    case 'CONTACTS_UPDATED': {
      console.log('Contacts Reducer', {...action.payload});
      return {...action.payload};
    }
    default: {
      return state;
    }
  }
}
