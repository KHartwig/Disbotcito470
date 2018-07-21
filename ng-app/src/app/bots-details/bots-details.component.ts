import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Bot } from "../_models";
import { AlertService, BotService } from "../_services";
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
              private botService: BotService,
              private alertService: AlertService ) { }

  ngOnInit() {

    this.sub = this.activatedRouter.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      this.loadBot();
    });
  }

  startStop() {
     //console.log(this.bot.status);

    // this.loading = true;
    if ( this.bot.status == "ONLINE"){
      this.botService.stop(this.bot.id)
      .pipe(first())
      .subscribe(
        data => {
          this.loadBot();
          this.alertService.success('Bot stopped', true);
  
        },
        error => {
          this.alertService.error(error);
      });
    }
      
    else{

      this.botService.start(this.bot.id)
        .pipe(first())
        .subscribe(
          data => {
            this.loadBot();
            this.alertService.success('Bot started', true);

          },
          error => {
            this.alertService.error(error);
        });
    }
    
    // console.log(this.bot.status);
  }

  loadBot(){
          this.botService.getById(this.id).pipe(first()).subscribe(rcvdBot => {
        this.bot = rcvdBot;

      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
