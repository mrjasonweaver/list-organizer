// state
export type Contact = { id: number, firstName: string, lastName: string, email: string };
export type ContactsState = { contacts: Contact[] };
export type ContactState = { contact: Contact };
export type FirstNameState = { firstName: string; }
export type LastNameState = { lastName: string; }
export type EmailState = { email: string; }

export const InitialContactsState: ContactsState = {
  contacts: [{ id: 0, firstName: "", lastName: "", email: ""}]
};
export const InitialContactState: ContactState = {
  contact: { id: 0, firstName: "", lastName: "", email: ""}
};