import { Action } from '../actions/contacts';

// reducer
export function contactsPageReducer(state: number, action: Action) {
  switch (action.type) {
    case  'CONTACTS_PAGE_UPDATED': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}