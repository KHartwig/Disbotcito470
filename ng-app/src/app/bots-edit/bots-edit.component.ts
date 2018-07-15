import { Component, OnInit } from '@angular/core';
import {AlertService, BotService} from "../_services";
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Bot } from "../_models";

@Component({
  selector: 'app-bots-edit',
  templateUrl: './bots-edit.component.html',
  styleUrls: ['./bots-edit.component.css']
})
export class BotsEditComponent implements OnInit {
  editBotForm: FormGroup;
  loading = false;
  submitted = false;
  shouldAdd = true;

  id: number;
  sub: any;
  bot: Bot;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private botService: BotService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.sub = this.activatedRouter.params.subscribe(params => {
      if (params['id']) { //has id, so edit
        this.shouldAdd = false;
        this.id = params['id']; // (+) converts string 'id' to a number
        // In a real app: dispatch action to load the details here.
        this.botService.getById(this.id).pipe(first()).subscribe(rcvdBot => {
          this.bot = rcvdBot;
          this.editBotForm = this.formBuilder.group({
            name: [`${this.bot.name}`, Validators.required],
            discordToken: [`${this.bot.discordToken}`, Validators.required],
            status: [this.bot.status ? `${this.bot.status}` : 'Offline']
          });
        });
      } else {
        this.editBotForm = this.formBuilder.group({
          name: ['', Validators.required],
          discordToken: ['', Validators.required],
          status: ['Offline']
        });
      }
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.editBotForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.editBotForm.invalid) {
      return;
    }

    this.loading = true;
    if (this.shouldAdd) {
      this.botService.add(this.editBotForm.value)
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
    } else {
      this.botService.update(this.editBotForm.value, this.bot.id)
        .pipe(first())
        .subscribe(
          data => {
            this.alertService.success('Bot edited successfully', true);
            this.router.navigate(['/bots/', this.bot.id]);
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });
    }
  }

  onDelete() {
    this.loading = true;
    console.log('Are you sure you want to delete?');
    this.botService.delete(this.bot.id)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Bot Deleted', true);
          this.router.navigate(['/']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
      });
  }

}
