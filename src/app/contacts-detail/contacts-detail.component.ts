import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { select, Store } from '@ngrx/store';
import { ApplicationState } from '../state/app.state';
import { SelectContactAction } from '../state/contacts/contacts.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
  contact$: Observable<Contact>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<ApplicationState>
  ) {}

  ngOnInit() {
    const contactId = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new SelectContactAction(+contactId));

    this.contact$ = this.store.pipe(
      select(state => {
        const id = state.contacts.selectedContactId;
        return state.contacts.list.find(contact => {
          return contact.id === id;
        });
      })
    );
  }
}
