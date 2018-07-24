import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Bot } from "../_models";
import { AlertService, BotService } from "../_services";
import {first} from "rxjs/internal/operators";

@Component({
  selector: 'app-guilds-details',
  templateUrl: './guilds-details.component.html',
  styleUrls: ['./guilds-details.component.css']
})
export class BotsDetailsComponent implements OnInit, OnDestroy {
  id: number;
  sub: any;
  guild: Bot;

  constructor(private activatedRouter: ActivatedRoute,
              private guildService: BotService,
              private alertService: AlertService ) { }

  ngOnInit() {

    this.sub = this.activatedRouter.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      this.loadBot();
    });
  }

  startStop() {
     //console.log(this.guild.status);

    // this.loading = true;
    if ( this.guild.status == "ONLINE"){
      this.guildService.stop(this.guild.id)
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

      this.guildService.start(this.guild.id)
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
    
    // console.log(this.guild.status);
  }

  loadBot(){
          this.guildService.getById(this.id).pipe(first()).subscribe(rcvdBot => {
        this.guild = rcvdBot;

      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
