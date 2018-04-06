import { counterReducer } from './count';
import { itemsReducer } from './items';

export const appReducer = {
  count: counterReducer,
  items: itemsReducer
}