import { Action } from '@ngrx/store';
import { Contact } from '../../models/contact';

export enum ContactsActionTypes {
  LOAD_CONTACTS_SUCCESS = '[CONTACTS] Load Success',
  ADD_CONTACT = '[CONTACTS] Add',
  UPDATE_CONTACT = '[CONTACTS] Update',
  SELECT_CONTACT = '[CONTACTS] Select'
}

export class LoadContactsSuccessAction implements Action {
  readonly type = ContactsActionTypes.LOAD_CONTACTS_SUCCESS;
  constructor(public payload: Array<Contact>) {}
}

export class UpdateContactAction implements Action {
  readonly type = ContactsActionTypes.UPDATE_CONTACT;
  constructor(public payload: Contact) {}
}

export class SelectContactAction implements Action {
  readonly type = ContactsActionTypes.SELECT_CONTACT;
  constructor(public payload: number) {}
}

export class AddContactAction implements Action {
  readonly type = ContactsActionTypes.ADD_CONTACT;
  constructor(public payload: Contact) {}
}

export type ContactsActions = LoadContactsSuccessAction | UpdateContactAction | SelectContactAction | AddContactAction;
