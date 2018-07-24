import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import { Guild } from "../_models";
import { AlertService, GuildService } from "../_services";
import {first} from "rxjs/internal/operators";

@Component({
  selector: 'app-guilds-details',
  templateUrl: './guilds-details.component.html',
  styleUrls: ['./guilds-details.component.css']
})
export class GuildsDetailsComponent implements OnInit, OnDestroy {
// export class GuildsDetailsComponent  {
  // id: number;
  // sub: any;
  // guild: Guild;

  constructor(private activatedRouter: ActivatedRoute,
              private guildService: GuildService,
              private alertService: AlertService ) { }

  ngOnInit() {

  //   this.sub = this.activatedRouter.params.subscribe(params => {
  //     this.id = params['id']; // (+) converts string 'id' to a number
  //     // In a real app: dispatch action to load the details here.
  //     this.loadGuild();
  //   });
  }

  // startStop() {
  //    //console.log(this.guild.status);

  //   // this.loading = true;
  //   if ( this.guild.status == "ONLINE"){
  //     this.guildService.stop(this.guild.id)
  //     .pipe(first())
  //     .subscribe(
  //       data => {
  //         this.loadGuild();
  //         this.alertService.success('Guild stopped', true);
  
  //       },
  //       error => {
  //         this.alertService.error(error);
  //     });
  //   }
      
  //   else{

  //     this.guildService.start(this.guild.id)
  //       .pipe(first())
  //       .subscribe(
  //         data => {
  //           this.loadGuild();
  //           this.alertService.success('Guild started', true);

  //         },
  //         error => {
  //           this.alertService.error(error);
  //       });
  //   }
    
  //   // console.log(this.guild.status);
  // }

  // loadGuild(){
  //         this.guildService.getById(this.id).pipe(first()).subscribe(rcvdGuild => {
  //       this.guild = rcvdGuild;

  //     });
  // }

  ngOnDestroy() {
  //   this.sub.unsubscribe();
  }
}
