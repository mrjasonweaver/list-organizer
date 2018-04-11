import { counterReducer } from './count';
import { itemsReducer } from './items';
import { contactsReducer } from './contacts';

export const appReducer = {
  count: counterReducer,
  items: itemsReducer,
  contacts: contactsReducer
}