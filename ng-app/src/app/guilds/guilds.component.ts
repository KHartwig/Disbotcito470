import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import { Guild } from '../_models';
import { Bot } from '../_models';

import { GuildService, AlertService, BotService } from "../_services";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-guilds',
  templateUrl: './guilds.component.html',
  styleUrls: ['./guilds.component.css']
})
export class GuildsComponent implements OnInit {
// export class GuildsComponent  {
  guildList = [{
                "name": "",
                "iconURL": "",
                "ownerUsername": "",
                "ownerID": "",
                "memberCount": "",
                "region": "",
                "available": ""
              }];

        //               id: guild.id,                               // string - discord id
        // name: guild.name,                           // string - name of the guild
        // iconURL: guild.iconURL,                     // string - url to guild's icon
        // ownerUsername: guild.owner.user.username,   // string - Username of the owner user
        // ownerID: guild.ownerID,                     // string - ID of the owner user
        // memberCount: guild.memberCount,             // number - Number of members in the guild
        // region: guild.region,                       // string - Region where guild is hosted
        // available: guild.available 


sub: any;
bid: number;
gid: number;
  // // guild: Guild;
  // // selectedGuild: Guild;
  // // id: number;
  constructor(
              private activatedRouter: ActivatedRoute,
              private guildService: GuildService,
              private botService: BotService,
              private alertService: AlertService) { }

  ngOnInit() {
      this.sub = this.activatedRouter.params.subscribe(params => {
      this.bid = params['bid']; // (+) converts string 'id' to a number
      this.gid = params['gid']; // (+) converts string 'id' to a number

      this.botService.getById(this.bid).pipe(first()).subscribe(rcvdBot => {
          const bot = rcvdBot;

          if ( bot.status == "ONLINE") 
            this.loadGuilds();
        });
      // console.log(this.gid);
  //     // In a real app: dispatch action to load the details here.
    });
  //   this.loadGuilds();
  }

  loadGuilds () {

    this.guildService.getAll(this.bid).pipe(first()).subscribe(guilds => {
      this.guildList = guilds;
    });
  }

  // startStop(i:number) {
  //       this.guildService.getById(i).pipe(first()).subscribe(rcvdGuild => {
  //           const guild: Guild = rcvdGuild;


  //         if ( guild.status == "ONLINE" ){
  //           this.guildService.stop(guild.id)
  //           .pipe(first())
  //           .subscribe(
  //             guild => {
  //                   this.loadGuilds();
  //             },
  //             error => {
  //               this.alertService.error(error);
  //           });
  //         }

  //         else{
  //           this.guildService.start(guild.id)
  //             .pipe(first())
  //             .subscribe(
  //               data => {

  //                   this.loadGuilds();

  //               },
  //               error => {
  //                 this.alertService.error(error);
  //             });
  //         }

  //       });

  
}
