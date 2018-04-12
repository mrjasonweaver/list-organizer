// state
export type Contact = { id: number, firstName: string, lastName: string, email: string, role: string, organization: string, phone: string, status: boolean};
export type ContactsState = { contacts: Contact[] };
export type ContactState = { contact: Contact };
export type FirstNameState = { firstName: string; }
export type LastNameState = { lastName: string; }
export type EmailState = { email: string; }
export type RoleState = { role: string; }
export type OrganizationState = { organization: string; }
export type PhoneState = { phone: string; }
export type StatusState = { status: boolean; }

export const InitialContactsState: ContactsState = {
  contacts: [{ id: 0, firstName: "", lastName: "", email: "", role: "", organization: "", phone: "", status: false}]
};
export const InitialContactState: ContactState = {
  contact: { id: 0, firstName: "", lastName: "", email: "", role: "", organization: "", phone: "", status: false}
};