import { Component, OnInit } from '@angular/core';
import {AlertService, ContactService} from "../_services";
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {Contact} from "../_models";

@Component({
  selector: 'app-contacts-edit',
  templateUrl: './contacts-edit.component.html',
  styleUrls: ['./contacts-edit.component.css']
})
export class ContactsEditComponent implements OnInit {
  editContactForm: FormGroup;
  loading =false;
  submitted = false;

  id: string;
  sub: any;
  contact: Contact;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private contactService: ContactService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.sub = this.activatedRouter.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      this.contactService.getById(this.id).pipe(first()).subscribe(rcvdContact => {
        this.contact = rcvdContact;
        this.editContactForm = this.formBuilder.group({
          firstName: [`${this.contact.firstName}`, Validators.required],
          lastName: [`${this.contact.lastName}`, Validators.required],
          email: [ this.contact.email ? `${this.contact.email}` : '',
                    Validators.email],
          phone: [ this.contact.phone ? `${this.contact.phone}` : '',
                    Validators.pattern('^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}$')],
          notes: [ this.contact.notes ? `${this.contact.notes}` : '']
        });
      });
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.editContactForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.editContactForm.invalid) {
      return;
    }

    this.loading = true;
    this.contactService.update(this.editContactForm.value, this.contact.id)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Contact edited successfully', true);
          this.router.navigate(['/contacts/', this.contact.id]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

  onDelete() {
    this.loading = true;
    console.log('Are you sure you want to delete?');
    this.contactService.delete(this.contact.id)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Contact Deleted', true);
          this.router.navigate(['/']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
      });
  }

}
