// state
export type Contact = { id: number, firstName: string, lastName: string, email: string };
export type ContactsState = { contacts: Contact[] };

export const InitialContactsState: ContactsState = {
  contacts: [{ id: 0, firstName: "", lastName: "", email: ""}]
};