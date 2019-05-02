import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AddContactAction, SelectContactAction } from '../state/contacts/contacts.actions';
import { select, Store } from '@ngrx/store';
import { ApplicationState } from '../state/app.state';
import { map, mergeMap, take, tap } from 'rxjs/operators';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Injectable({
  providedIn: 'root'
})
export class ContactExistsGuard implements CanActivate {
  constructor(private store: Store<ApplicationState>, private contactsService: ContactsService) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const contactId = route.paramMap.get('id');
    this.store.dispatch(new SelectContactAction(+contactId));

    const resolveOrAddContactToList = (loaded: boolean) => {
      const addContactToList = (contact: Contact) => {
        this.store.dispatch(new AddContactAction(contact));
      };

      return loaded
        ? of(true)
        : this.contactsService.getContact(contactId).pipe(
            tap(addContactToList),
            map(contact => !!contact)
          );
    };

    return this.store.pipe(
      select(state => state.contacts.loaded),
      take(1),
      mergeMap(resolveOrAddContactToList)
    );
  }
}
