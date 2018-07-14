import { Component, OnInit } from '@angular/core';
import {AlertService, BotService} from "../_services";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-bots-add',
  templateUrl: './bots-add.component.html',
  styleUrls: ['./bots-add.component.css']
})
export class BotsAddComponent implements OnInit {
  addBotForm: FormGroup;
  loading =false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private botService: BotService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.addBotForm = this.formBuilder.group({
      name: ['', Validators.required],
      commandPrefix: ['', Validators.required]
      // ,
      // email: ['', Validators.email],
      // phone: ['', Validators.pattern('^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}$')],
      // notes: ['']
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.addBotForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addBotForm.invalid) {
      return;
    }

    this.loading = true;
    this.botService.add(this.addBotForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Bot added successfully', true);
          this.router.navigate(['/']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
