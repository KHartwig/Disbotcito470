import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Bot } from '../_models';
import { BotService, AlertService } from "../_services";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-bots',
  templateUrl: './bots.component.html',
  styleUrls: ['./bots.component.css']
})
export class BotsComponent implements OnInit {
  botList: Bot[] = [];
  // bot: Bot;
  // selectedBot: Bot;
  // id: number;
  constructor(private activatedRouter: ActivatedRoute,
              private botService: BotService,
              private alertService: AlertService) { }

  ngOnInit() {
    this.loadBots();
  }

  private loadBots () {
    this.botService.getAll().pipe(first()).subscribe(bots => {
      this.botList = bots;
    });
  }

  startStop(i:number) {
        this.botService.getById(i).pipe(first()).subscribe(rcvdBot => {
            const bot: Bot = rcvdBot;


          if ( bot.status == "ONLINE" ){
            this.botService.stop(bot.id)
            .pipe(first())
            .subscribe(
              bot => {
                    this.loadBots();
              },
              error => {
                this.alertService.error(error);
            });
          }

          else{
            this.botService.start(bot.id)
              .pipe(first())
              .subscribe(
                data => {

                    this.loadBots();

                },
                error => {
                  this.alertService.error(error);
              });
          }

        });

  }
}
