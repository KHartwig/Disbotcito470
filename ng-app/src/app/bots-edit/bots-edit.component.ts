import {Component, OnInit, ViewChild, ViewChildren, QueryList} from '@angular/core';
import { AlertService, BotService } from '../_services';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Bot } from '../_models';
import { CommandsEditComponent } from '../commands-edit/commands-edit.component';
import {ActionsEditComponent} from "../actions-edit/actions-edit.component";

enum PageAction {
  Add,
  Edit
}

@Component({
  selector: 'app-bots-edit',
  templateUrl: './bots-edit.component.html',
  styleUrls: ['./bots-edit.component.css']
})
export class BotsEditComponent implements OnInit {
  @ViewChild(CommandsEditComponent) commandListEditor : CommandsEditComponent;
  editBotForm: FormGroup;
  loading = false;
  submitted = false;
  PAGE_ACTIONS: typeof PageAction = PageAction;
  pageAction = PageAction.Add;

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
      if (params['bid']) { // has id, so edit
        this.pageAction = PageAction.Edit;
        this.id = params['bid']; // (+) converts string 'id' to a number
        // In a real app: dispatch action to load the details here.
        this.botService.getById(this.id).pipe(first()).subscribe(rcvdBot => {
          this.bot = rcvdBot;
          this.editBotForm = this.formBuilder.group({
            name: [`${this.bot.name}`, Validators.required],
            discordToken: [`${this.bot.discordToken}`, Validators.required],
            commandPrefix: [`${this.bot.commandPrefix}`, Validators.required]
          });
        });
      } else {
        this.editBotForm = this.formBuilder.group({
          name: ['', Validators.required],
          discordToken: ['', Validators.required],
          commandPrefix: ['', Validators.required]
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

    // Attach command list
    if (this.commandListEditor)
      this.editBotForm.value.commands = this.commandListEditor.getValidCommandListForSubmission();

    this.loading = true;
    if (this.pageAction === PageAction.Add) {
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
          bot => {
            console.log("BOT RETURNED", bot);
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
