import { counterReducer } from './count';
import { contactsReducer } from './contacts';
import { contactReducer } from './contact';

export const appReducer = {
  count: counterReducer,
  contacts: contactsReducer,
  contact: contactReducer
}