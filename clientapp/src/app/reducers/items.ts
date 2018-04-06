import { ItemsState } from '../models/items';
import { Action } from '../actions/items';

// reducer
export function itemsReducer(state: ItemsState, action: Action): ItemsState {
  switch (action.type) {
    case 'ITEMS_UPDATED': {
      return {...state, ...action.payload};
    }
    case  'ITEM_UPDATED': {
      const items = {...state.items};
      items[action.payload.id] = action.payload;
      return {...state, items};
    }
    case 'RATE': {
      const items = {...state.items};
      items[action.payload.itemId].rating = action.payload.rating;
      return {...state, items};
    }
    case 'UNRATE': {
      const items = {...state.items};
      items[action.payload.itemId].rating = null;
      return {...state, items};
    }
    case 'ITEM_WATCHED': {
      const watched = {...state.watched};
      watched[action.payload.itemId] = true;
      return {...state, watched};
    }
    default: {
      return state;
    }
  }
}