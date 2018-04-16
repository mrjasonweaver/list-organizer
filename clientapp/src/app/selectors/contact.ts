import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Contact,
  FirstNameState,
  LastNameState,
  EmailState,
  RoleState,
  OrganizationState,
  PhoneState,
  StatusState } from '../models/contacts';

export const selectContact = createFeatureSelector<Contact>('contact');
export const selectContactFirstName = createSelector(selectContact, (state: FirstNameState) => state.firstName);
export const selectContactLastName = createSelector(selectContact, (state: LastNameState) => state.lastName);
export const selectContactEmail = createSelector(selectContact, (state: EmailState) => state.email);
export const selectContactRole = createSelector(selectContact, (state: RoleState) => state.role);
export const selectContactOrganization = createSelector(selectContact, (state: OrganizationState) => state.organization);
export const selectContactPhone = createSelector(selectContact, (state: PhoneState) => state.phone);
export const selectContactStatus = createSelector(selectContact, (state: StatusState) => state.status);
