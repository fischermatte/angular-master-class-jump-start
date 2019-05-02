import { Action } from '@ngrx/store';
import { Contact } from '../../models/contact';

export enum ContactsActionTypes {
  LOAD_CONTACTS_SUCCESS_ACTION = '[CONTACTS] Load Success',
  UPDATE_CONTACT_ACTION = '[CONTACTS] Update',
  SELECT_CONTACT_ACTION = '[CONTACTS] Select'
}

export class LoadContactsSuccessAction implements Action {
  readonly type = ContactsActionTypes.LOAD_CONTACTS_SUCCESS_ACTION;
  constructor(public payload: Array<Contact>) {}
}

export class UpdateContactAction implements Action {
  readonly type = ContactsActionTypes.UPDATE_CONTACT_ACTION;
  constructor(public payload: Contact) {}
}

export class SelectContactAction implements Action {
  readonly type = ContactsActionTypes.SELECT_CONTACT_ACTION;
  constructor(public payload: number) {}
}

export type ContactsActions = LoadContactsSuccessAction | UpdateContactAction | SelectContactAction;
