import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Contact, FirstNameState, LastNameState, EmailState } from '../models/contacts';

export const selectContact = createFeatureSelector<Contact>('contact');
export const selectContactFirstName = createSelector(selectContact, (state: FirstNameState) => state.firstName);
export const selectContactLastName = createSelector(selectContact, (state: LastNameState) => state.lastName);
export const selectContactEmail = createSelector(selectContact, (state: EmailState) => state.email);