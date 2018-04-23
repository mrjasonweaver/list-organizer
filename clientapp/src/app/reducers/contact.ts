import { IContact, IContactState } from '../models/contacts';
import { Action } from '../actions/contacts';

// reducer
export function contactReducer(state: IContactState, action: Action): IContactState {
  switch (action.type) {
    case  'CONTACT_UPDATED': {
      console.log('Contact Reducer', {...action.payload});
      return {...action.payload };
    }
    default: {
      return state;
    }
  }
}
