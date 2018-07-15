import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Bot } from "../_models";
import { BotService } from "../_services";
import {first} from "rxjs/internal/operators";

@Component({
  selector: 'app-bots-details',
  templateUrl: './bots-details.component.html',
  styleUrls: ['./bots-details.component.css']
})
export class BotsDetailsComponent implements OnInit, OnDestroy {
  id: number;
  sub: any;
  bot: Bot;

  constructor(private activatedRouter: ActivatedRoute,
              private botService: BotService ) { }

  ngOnInit() {
    this.sub = this.activatedRouter.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      this.botService.getById(this.id).pipe(first()).subscribe(rcvdBot => {
        this.bot = rcvdBot;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
