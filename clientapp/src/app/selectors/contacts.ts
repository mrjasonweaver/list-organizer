import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ContactsState, ContactsListState, ContactsPageState } from '../models/contacts';

export const selectContacts = createFeatureSelector<ContactsState>('contacts');
export const selectContactsList = createSelector(selectContacts, (state: ContactsListState) => state.contacts);
export const selectContactsPageNumber = createSelector(selectContacts, (state: ContactsPageState) => state.page);