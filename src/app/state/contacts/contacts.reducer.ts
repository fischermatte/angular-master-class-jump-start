import { Contact } from '../../models/contact';
import { ContactsActions, ContactsActionTypes } from './contacts.actions';

export interface ContactsState {
  list: Array<Contact>;
  selectedContactId: number;
}

const INITIAL_STATE: ContactsState = {
  list: [],
  selectedContactId: undefined
};

export function contactsReducer(state: ContactsState = INITIAL_STATE, action: ContactsActions) {
  switch (action.type) {
    case ContactsActionTypes.UPDATE_CONTACT_ACTION:
      const updatedList = state.list.map(contact => {
        return contact.id === action.payload.id ? { ...contact, ...action.payload } : contact;
      });

      return { ...state, list: updatedList };
    case ContactsActionTypes.SELECT_CONTACT_ACTION:
      return { ...state, selectedContactId: action.payload };
    case ContactsActionTypes.LOAD_CONTACTS_SUCCESS_ACTION:
      return {
        ...state,
        list: action.payload
      };
  }
  return state;
}
