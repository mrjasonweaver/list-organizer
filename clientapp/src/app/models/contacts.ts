// state
export interface IContact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  organization: string;
  phone: string;
  status: boolean;
}
export interface IContactsState { page: number; contacts: IContact[]; }
export interface IContactsListState { contacts: IContact[]; }
export interface IContactsPageState { page: number; }
export interface IContactState { contact: IContact; }
export interface IFirstNameState { firstName: string; }
export interface ILastNameState { lastName: string; }
export interface IEmailState { email: string; }
export interface IRoleState { role: string; }
export interface IOrganizationState { organization: string; }
export interface IPhoneState { phone: string; }
export interface IStatusState { status: boolean; }

export const InitialContactsState: IContactsState = {
  page: 1,
  contacts: [{ id: 0, firstName: '', lastName: '', email: '', role: '', organization: '', phone: '', status: false }]
};
export const InitialContactState: IContactState = {
  contact: { id: 0, firstName: '', lastName: '', email: '', role: '', organization: '', phone: '', status: false}
};
