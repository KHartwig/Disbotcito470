import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

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
  // // guild: Guild;
  // // selectedGuild: Guild;
  // // id: number;
  constructor(
              // private activatedRouter: ActivatedRoute,
              private guildService: GuildService,
              private alertService: AlertService) { }

  ngOnInit() {
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
