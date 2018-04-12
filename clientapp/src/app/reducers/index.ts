import { counterReducer } from './count';
import { itemsReducer } from './items';
import { contactsReducer } from './contacts';
import { contactReducer } from './contact';

export const appReducer = {
  count: counterReducer,
  items: itemsReducer,
  contacts: contactsReducer,
  contact: contactReducer
}