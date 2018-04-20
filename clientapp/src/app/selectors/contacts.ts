import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ContactsState, Contact } from '../models/contacts';

export const selectContacts = createFeatureSelector<ContactsState>('contacts');
export const selectContactsList = createSelector(selectContacts, (state: ContactsState) => state.contacts);
export const selectContactsPageNumber = createSelector(selectContacts, (state: ContactsState) => state.pageNumber);