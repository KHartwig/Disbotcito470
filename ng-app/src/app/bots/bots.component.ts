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
  botStatList: boolean = [];
  constructor(private botService: BotService) { }

  ngOnInit() {
    this.loadBots();
  }

  private loadBots () {
    this.botService.getAll().pipe(first()).subscribe(bots => {
      this.botList = bots;
    });
  }

  startStop(id number) {
    // this.loading = true;
    if ( this.botStatList[id] ){
      this.botService.stop(id)
      .pipe(first())
      .subscribe(
        data => {
          this.botStatList[id] = false;
          // this.alertService.success('Bot stopped', true);
          // this.router.navigate(['/']);
        },
        error => {
          this.alertService.error(error);
          // this.loading = false;
      });
    }
      
    else{
      this.botService.start(id)
        .pipe(first())
        .subscribe(
          data => {
          this.botStatList[id] = true;
            // this.alertService.success('Bot started', true);
            // this.router.navigate(['/']);
          },
          error => {
            this.alertService.error(error);
            // this.loading = false;
        });
    }
  }
}
