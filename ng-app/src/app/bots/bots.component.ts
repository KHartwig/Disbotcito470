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
}
