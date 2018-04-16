import { InitialContactsState, InitialContactState, ContactsState } from './contacts';

export interface AppState { contacts: ContactsState; }
export interface State { app: AppState; }

export const initialState = {
  InitialContactsState,
  InitialContactState
};
