import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IContactsState, IContactsListState, IContactsPageState } from '../models/contacts';

export const selectContacts = createFeatureSelector<IContactsState>('contacts');
export const selectContactsList = createSelector(selectContacts, (state: IContactsListState) => state.contacts);
export const selectContactsPageNumber = createSelector(selectContacts, (state: IContactsPageState) => state.page);
