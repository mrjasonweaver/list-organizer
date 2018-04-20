import { InitialContactsState, InitialContactState, ContactsState, Contact } from './contacts';

export interface AppState { contacts: ContactsState; contact: Contact}
export interface State { app: AppState; }

export const initialState = {
  InitialContactsState,
  InitialContactState
};
