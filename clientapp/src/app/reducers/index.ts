import { contactsReducer } from './contacts';
import { contactReducer } from './contact';

export const appReducer = {
  contacts: contactsReducer,
  contact: contactReducer
};
