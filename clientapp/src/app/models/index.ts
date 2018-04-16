import { InitialCountState, CountState } from './count';
import { InitialContactsState, InitialContactState, InitialContactPageState, ContactsState } from './contacts';

export type AppState = { counter: CountState, contacts: ContactsState };
export type State = { app: AppState };

export const initialState = {
  InitialCountState,
  InitialContactsState,
  InitialContactState,
  InitialContactPageState,
}
