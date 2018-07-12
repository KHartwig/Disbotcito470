import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Contact } from "../_models";
import { ContactService } from "../_services";
import {first} from "rxjs/internal/operators";

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.css']
})
export class ContactsDetailsComponent implements OnInit {
  id: string;
  sub: any;
  contact: Contact;

  constructor(private activatedRouter: ActivatedRoute,
              private contactService: ContactService ) { }

  ngOnInit() {
    this.sub = this.activatedRouter.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      this.contactService.getById(this.id).pipe(first()).subscribe(rcvdContact => {
        this.contact = rcvdContact;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
