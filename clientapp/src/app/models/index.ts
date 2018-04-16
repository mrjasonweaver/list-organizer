import { InitialCountState, CountState } from './count';
import { InitialContactsState, InitialContactState, ContactsState } from './contacts';

export interface AppState { counter: CountState; contacts: ContactsState; }
export interface State { app: AppState; }

export const initialState = {
  InitialCountState,
  InitialContactsState,
  InitialContactState
};
