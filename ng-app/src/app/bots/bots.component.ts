import { Component, OnInit } from '@angular/core';

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

  constructor(private botService: BotService) { }

  ngOnInit() {
    this.loadBots();
  }

  private loadBots () {
    this.botService.getAll().pipe(first()).subscribe(bots => {
      this.botList = bots;
    });
  }

  startStop() {
    // this.loading = true;
    if ( this.state ){
      this.botService.stop(this.bot.id)
      .pipe(first())
      .subscribe(
        data => {
          this.state= false;
          this.alertService.success('Bot stopped', true);
          // this.router.navigate(['/']);
        },
        error => {
          this.alertService.error(error);
          // this.loading = false;
      });
    }
      
    else{
      this.botService.start(this.bot.id)
        .pipe(first())
        .subscribe(
          data => {
          this.state= true;
            this.alertService.success('Bot started', true);
            // this.router.navigate(['/']);
          },
          error => {
            this.alertService.error(error);
            // this.loading = false;
        });
    }
  }
}
