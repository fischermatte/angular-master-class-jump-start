import { ActionReducerMap } from '@ngrx/store';
import { contactsReducer, ContactsState } from './contacts/contacts.reducer';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

export interface ApplicationState {
  contacts: ContactsState;
  router: RouterReducerState;
}

export const ROOT_REDUCER: ActionReducerMap<ApplicationState> = {
  contacts: contactsReducer,
  router: routerReducer
};
