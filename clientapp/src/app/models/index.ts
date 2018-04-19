import { InitialContactsState, InitialContactsPageState, InitialContactState, ContactsState, ContactsPageState, Contact } from './contacts';

export interface AppState { contacts: ContactsState; pageNumber: ContactsPageState; contact: Contact}
export interface State { app: AppState; }

export const initialState = {
  InitialContactsState,
  InitialContactsPageState,
  InitialContactState
};
