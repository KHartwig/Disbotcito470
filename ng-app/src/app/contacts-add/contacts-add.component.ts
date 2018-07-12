import { Component, OnInit } from '@angular/core';
import {AlertService, ContactService} from "../_services";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-contacts-add',
  templateUrl: './contacts-add.component.html',
  styleUrls: ['./contacts-add.component.css']
})
export class ContactsAddComponent implements OnInit {
  addContactForm: FormGroup;
  loading =false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private contactService: ContactService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.addContactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      phone: ['', Validators.pattern('^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}$')],
      notes: ['']
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.addContactForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addContactForm.invalid) {
      return;
    }

    this.loading = true;
    this.contactService.add(this.addContactForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Contact added successfully', true);
          this.router.navigate(['/']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
