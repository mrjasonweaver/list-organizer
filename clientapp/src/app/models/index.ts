import { InitialContactsState, InitialContactState, IContactsState, IContact } from './contacts';

export interface IAppState { contacts: IContactsState; contact: IContact; }
export interface IState { app: IAppState; }

export const initialState = {
  InitialContactsState,
  InitialContactState
};
