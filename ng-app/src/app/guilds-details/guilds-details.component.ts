import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DiscordGuild, DiscordMember, DiscordEmoji } from "../_models";
import { AlertService, GuildService, BotService } from "../_services";
import {first} from "rxjs/internal/operators";

@Component({
  selector: 'app-guilds-details',
  templateUrl: './guilds-details.component.html',
  styleUrls: ['./guilds-details.component.css']
})
export class GuildsDetailsComponent implements OnInit, OnDestroy {
  gid: number;
  bid: number;
  sub: any; //for activatedRouter.params

  // All parameters are defined in './_models'
  guild: DiscordGuild;
  memberList: DiscordMember[] =[];
  emojiList: DiscordEmoji[] = [];

  constructor(private activatedRouter: ActivatedRoute,
              private guildService: GuildService,
              private botService: BotService,
              private alertService: AlertService ) { }

  ngOnInit() {
    this.sub = this.activatedRouter.params.subscribe(params => {
      this.bid = params['bid']; // (+) converts string 'id' to a number
      this.gid = params['gid']; // (+) converts string 'id' to a number
      this.botService.getById(this.bid).pipe(first()).subscribe(rcvdBot => {
          // if ( rcvdBot.status == "ONLINE")
            this.loadMembersAndEmojis();
        });
      
    });
  }


  loadMembersAndEmojis(){
      this.guildService.getById(this.bid, this.gid).pipe(first()).subscribe(
        guild => {
          console.log(guild);
        this.guild = guild;
        this.emojiList = guild.emojis;
        this.memberList = guild.members;
      },
        err => {
          console.error(err);
        });

      // this.guildService.getMembers(this.bid, this.gid).pipe(first()).subscribe(member => {
      //   this.memberList = member;
      // });
      //   this.guildService.getEmojis(this.bid, this.gid).pipe(first()).subscribe(emoji => {
      //   this.emojiList = emoji;
      //
      // });
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
