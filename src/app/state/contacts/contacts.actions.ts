import { Action } from '@ngrx/store';
import { Contact } from '../../models/contact';

export enum ContactsActionTypes {
  LoadContactsSuccessAction = '[CONTACTS] Load Success'
}

export class LoadContactsSuccessAction implements Action {
  readonly type = ContactsActionTypes.LoadContactsSuccessAction;
  constructor(public payload: Array<Contact>) {}
}

export type ContactsActions = LoadContactsSuccessAction;
