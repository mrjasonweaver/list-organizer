// state
export type Contact = { id: number, firstName: string, lastName: string, email: string };
export type ContactsState = { contacts: { [ id: number ]: Contact } };

export const InitialContactsState: ContactsState = {
  contacts: [{ id: 111, firstName: "Jason", lastName: "Weaver", email: "indyplanets@gmail.com"}]
};