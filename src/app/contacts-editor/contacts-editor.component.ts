import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { Observable } from 'rxjs';
import { SelectContactAction, UpdateContactAction } from '../state/contacts/contacts.actions';
import { select, Store } from '@ngrx/store';
import { ApplicationState } from '../state/app.state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {
  // we need to initialize since we can't use ?. operator with ngModel
  contact$: Observable<Contact>;

  constructor(private store: Store<ApplicationState>, private contactService: ContactsService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const contactId = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new SelectContactAction(+contactId));

    this.contact$ = this.store.pipe(
      select(state => {
        const id = state.contacts.selectedContactId;
        return state.contacts.list.find(contact => {
          return contact.id === id;
        });
      }),
      map(contact => ({ ...contact }))
    );
  }

  cancel(contact: Contact) {
    this.goToDetails(contact);
  }

  save(contact: Contact) {
    this.contactService.updateContact(contact).subscribe(c => {
      this.store.dispatch(new UpdateContactAction(c));
      this.goToDetails(contact);
    });
  }

  private goToDetails(contact: Contact) {
    this.router.navigate(['/contact', contact.id]);
  }
}
