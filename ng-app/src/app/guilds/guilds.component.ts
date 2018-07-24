import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import { Guild } from '../_models';
import { GuildService, AlertService } from "../_services";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-guilds',
  templateUrl: './guilds.component.html',
  styleUrls: ['./guilds.component.css']
})
export class GuildsComponent implements OnInit {
// export class GuildsComponent  {
  guildList = [  { "id":1, "name":"pikachu"}, 
                 { "id":2, "name":"pikachu1"}, 
                 { "id":3, "name":"pikachu2"}
              ];
bid: number;
gid: number;
  // // guild: Guild;
  // // selectedGuild: Guild;
  // // id: number;
  constructor(
              private activatedRouter: ActivatedRoute,
              private guildService: GuildService,
              private alertService: AlertService) { }

  ngOnInit() {
      this.sub = this.activatedRouter.params.subscribe(params => {
      this.bid = params['bid']; // (+) converts string 'id' to a number
      this.gid = params['gid']; // (+) converts string 'id' to a number
      console.log(this.gid);
  //     // In a real app: dispatch action to load the details here.
  //     this.loadGuild();
    });
  //   this.loadGuilds();
  }

  // private loadGuilds () {
  //   this.guildService.getAll().pipe(first()).subscribe(guilds => {
  //     this.guildList = guilds;
  //   });
  // }

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
