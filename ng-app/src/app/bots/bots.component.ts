import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Bot } from '../_models';
import { BotService } from "../_services";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-bots',
  templateUrl: './bots.component.html',
  styleUrls: ['./bots.component.css']
})
export class BotsComponent implements OnInit {
  botList: Bot[] = [];
  bot: Bot;
  // selectedBot: Bot;
  // id: number;
  constructor(private activatedRouter: ActivatedRoute,
              private botService: BotService) { }

  ngOnInit() {
    this.loadBots();
  }

  private loadBots () {
    this.botService.getAll().pipe(first()).subscribe(bots => {
      this.botList = bots;
    });
  }

  loadBot(){
          this.botService.getById(this.id).pipe(first()).subscribe(rcvdBot => {
        this.bot = rcvdBot;

      });
  }

  startStop(i number) {
    this.loadBot(i);
    // this.loading = true;
  
    // this.botService.getById(i).pipe(first()).subscribe(rcvdBot => {
    //   this.bot = rcvdBot;
    // });
  
    // this.bot = ;
    if ( this.bot.status == "ONLINE" ){
      this.botService.stop(this.bot.id)
      .pipe(first())
      .subscribe(
        data => {
  
  
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
  
          console.log(this.selectedBot.status);
  
  
  
          },
          error => {
            this.alertService.error(error);
        });
    }
  
  
  }
}
