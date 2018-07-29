import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import { Guild } from "../_models";
import { AlertService, GuildService, BotService } from "../_services";
import {first} from "rxjs/internal/operators";

@Component({
  selector: 'app-guilds-details',
  templateUrl: './guilds-details.component.html',
  styleUrls: ['./guilds-details.component.css']
})
export class GuildsDetailsComponent implements OnInit, OnDestroy {
// @Input() gId: number;
gid: number;
bid: number;

  sub: any;




memberList: any;


        // id: member.id,                              // string - discord id
        // username: member.user.username,             // string - username of the user
        // nickname: member.nickname,                  // string - nickname in the guild
        // displayName: member.displayName,            // string - nickname, if null then username
        // tag: member.user.tag,                       // string - discord tag of the user
        // avatarURL: member.user.displayAvatarURL,    // string - url to the avatar pic/gif
        // status: member.user.presence.status,        // string - 'online', 'offline', 'idle', 'dnd' - DoNotDisturb
        // joinedAt: member.joinedAt,                  // date - when user became a member of the guild
        // createdAt: member.user.createdAt,           // date - when the user was created
        // bot: member.user.bot  


emojiList: any;


        // id: emoji.id,                               // string - discord id
        // name: emoji.name,                           // string - name of the emoji
        // url: emoji.url,                             // string - url where emoji is found
        // requiresColons: emoji.requiresColons,       // bool -  true if emoji requires colons surrounding name
        // createdAt: emoji.createdAt    

  constructor(private activatedRouter: ActivatedRoute,
              private guildService: GuildService,
              private botService: BotService,
              private alertService: AlertService ) { }

  ngOnInit() {
    this.memberList=false;
    this.emojiList=false;
    this.sub = this.activatedRouter.params.subscribe(params => {
      this.bid = params['bid']; // (+) converts string 'id' to a number
      this.gid = params['gid']; // (+) converts string 'id' to a number
      console.log(this.gid);
  //     // In a real app: dispatch action to load the details here.
      this.botService.getById(this.bid).pipe(first()).subscribe(rcvdBot => {
          const bot = rcvdBot;

          if ( bot.status == "ONLINE") 
            this.loadMembersAndEmojis();
        });
      
    });
  }


  loadMembersAndEmojis(){
        this.guildService.getMembers(this.bid, this.gid).pipe(first()).subscribe(member => {
        this.memberList = member;        
      });
        this.guildService.getEmojis(this.bid, this.gid).pipe(first()).subscribe(emoji => {
        this.emojiList = emoji;

      });
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



  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
