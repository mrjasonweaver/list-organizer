import { InitialCountState, CountState } from './count';
import { InitialItemsState, ItemsState } from './items';
import { InitialContactsState, ContactsState } from './contacts';

export type AppState = { counter: CountState, list: ItemsState, contacts: ContactsState };
export type State = { app: AppState };

export const initialState = {
  ...InitialCountState,
  ...InitialItemsState,
  ...InitialContactsState
}
