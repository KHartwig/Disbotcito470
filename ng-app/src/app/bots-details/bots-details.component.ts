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
  state: boolean = false;

  constructor(private activatedRouter: ActivatedRoute,
              private botService: BotService,
              private alertService: AlertService ) { }

  ngOnInit() {
    this.sub = this.activatedRouter.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      this.botService.getById(this.id).pipe(first()).subscribe(rcvdBot => {
        this.bot = rcvdBot;
      });
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


  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
