import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {BotService, DiscordService, DataService} from "../_services";

import { first } from "rxjs/operators";
import {DiscordUser} from "../_models";

@Component({
  selector: 'app-modal-bot-add',
  templateUrl: './modal-bot-add.component.html',
  styleUrls: ['./modal-bot-add.component.css']
})
export class ModalBotAddComponent implements OnInit {
  inputToken: string;
  botUser: DiscordUser;
  loading: boolean = false;
  validationFailed: boolean = false;

  constructor(public activeModal: NgbActiveModal,
              private discordService: DiscordService,
              private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
  }

  validateToken(token: string) {
    console.log(token);
    this.loading = true;
    this.discordService.validate(token).pipe(first()).subscribe(
      botUser => {
        console.log(botUser);
        this.botUser = botUser;
        this.loading = false;
      },
      error => {
        console.log('ERROR', error);
        this.validationFailed = true;
        this.loading = false;
        console.log('Validation failed?', this.validationFailed);
      });
  }

  goToCreate() {
    this.activeModal.dismiss('Changing Page');
    this.dataService.changeCreateBotInfo(this.inputToken, this.botUser);
    this.router.navigate(['/bots/add']);
  }
}
