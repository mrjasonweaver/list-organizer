import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IContact,
  IFirstNameState,
  ILastNameState,
  IEmailState,
  IRoleState,
  IOrganizationState,
  IPhoneState,
  IStatusState } from '../models/contacts';

export const selectContact = createFeatureSelector<IContact>('contact');
export const selectContactFirstName = createSelector(selectContact, (state: IFirstNameState) => state.firstName);
export const selectContactLastName = createSelector(selectContact, (state: ILastNameState) => state.lastName);
export const selectContactEmail = createSelector(selectContact, (state: IEmailState) => state.email);
export const selectContactRole = createSelector(selectContact, (state: IRoleState) => state.role);
export const selectContactOrganization = createSelector(selectContact, (state: IOrganizationState) => state.organization);
export const selectContactPhone = createSelector(selectContact, (state: IPhoneState) => state.phone);
export const selectContactStatus = createSelector(selectContact, (state: IStatusState) => state.status);
