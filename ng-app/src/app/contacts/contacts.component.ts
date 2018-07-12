import { Component, OnInit } from '@angular/core';

import { Contact } from '../_models';
import { ContactService } from "../_services";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contactList: Contact[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.loadContacts();
  }

  private loadContacts () {
    this.contactService.getAll().pipe(first()).subscribe(contacts => {
      this.contactList = contacts;
    });
  }
}
