import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Bot } from '../_models';
import { BotService, AlertService } from "../_services";
import { first } from "rxjs/operators";

@Component({
  selector: 'app-bots',
  templateUrl: './bots.component.html',
  styleUrls: ['./bots.component.css']
})
export class BotsComponent implements OnInit {
    botList: Bot[] = [];
    onlineBots: Bot[] = [];
    offlineBots: Bot[] = [];
  // bot: Bot;
  // selectedBot: Bot;
  // id: number;
  constructor(private activatedRouter: ActivatedRoute,
              private botService: BotService,
              private alertService: AlertService) { }

  ngOnInit() {
    this.loadBots();
  }

  // Function to sort bots, goes by createdAt, if same then sorts by id
  private botSort(botA, botB) {
      const timeA = new Date(botA.createdAt).getTime();
      const timeB = new Date(botB.createdAt).getTime();
      if (timeA !== timeB) return timeA - timeB;
      else return botA.id - botB.id;
  }

  private loadBots () {
    this.botService.getAll().pipe(first()).subscribe(bots => {
        bots.sort(this.botSort);
        this.botList = bots;
        console.log('All Bots', bots);
        this.onlineBots = bots.filter(bot => {return bot.status === 'ONLINE';})
        this.offlineBots = bots.filter(bot => {return bot.status === 'OFFLINE';})
    });
  }

  startStop(i:number) {
        const botToStartStop = this.botList.find((bot) => bot.id === i);
        this.botService.getById(i).pipe(first()).subscribe(rcvdBot => {
            const bot: Bot = rcvdBot;

            // TODO add a finally block to set isChangingStatus back to false
            botToStartStop.isChangingStatus = true;
            if ( bot.status == "ONLINE" ){
                this.botService.stop(bot.id)
                    .pipe(first())
                    .subscribe(
                        bot => {
                              this.loadBots();
                          },
                        error => {
                            this.alertService.error(error);
                            botToStartStop.isChangingStatus = false;
                          },
                        () => {
                            botToStartStop.isChangingStatus = false;
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
                    botToStartStop.isChangingStatus = false;
                  },
                  () => {
                    botToStartStop.isChangingStatus = false;
                  });

            }

        });

  }
}
