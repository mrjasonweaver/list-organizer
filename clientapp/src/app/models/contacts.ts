// state
export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  organization: string;
  phone: string;
  status: boolean;
}
export interface ContactsState { page: number; contacts: Contact[]; }
export interface ContactsListState { contacts: Contact[]; }
export interface ContactsPageState { page: number; }
export interface ContactState { contact: Contact; }
export interface FirstNameState { firstName: string; }
export interface LastNameState { lastName: string; }
export interface EmailState { email: string; }
export interface RoleState { role: string; }
export interface OrganizationState { organization: string; }
export interface PhoneState { phone: string; }
export interface StatusState { status: boolean; }

export const InitialContactsState: ContactsState = {
  page: 1,
  contacts: [{ id: 0, firstName: '', lastName: '', email: '', role: '', organization: '', phone: '', status: false }]
};
export const InitialContactState: ContactState = {
  contact: { id: 0, firstName: '', lastName: '', email: '', role: '', organization: '', phone: '', status: false}
};
