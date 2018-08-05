import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { Guild } from '../_models';
import { DiscordGuild, DiscordMember, DiscordEmoji } from '../_models';

@Injectable()
export class GuildService {
    constructor(private http: HttpClient) { }

    apiUrl = 'http://localhost:4000/api';

    getAll(bid: number) {
        return this.http.get<DiscordGuild[]>(this.apiUrl+ '/bots/' + bid + '/discord/guilds/');
    }     

    getById(bid: number, gid: number) {
        return this.http.get<DiscordGuild>(this.apiUrl+ '/bots/' + bid + '/discord/guilds/'+ gid);
    }    

    getMembers(bid: number, gid: number) {
        return this.http.get<DiscordMember[]>(this.apiUrl+ '/bots/' + bid + '/discord/guilds/' + gid + '/members');
    }    

    getEmojis(bid: number, gid: number) {
        return this.http.get<DiscordEmoji[]>(this.apiUrl+ '/bots/' + bid + '/discord/guilds/' + gid + '/emojis');
    }

}
