import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { Guild } from '../_models';
import { Bot } from '../_models';

@Injectable()
export class GuildService {
    constructor(private http: HttpClient) { }

    apiUrl = 'http://localhost:4000/api';
    guildUrl = this.apiUrl + '/bots/guilds';

    getAll(bid: number) {
        return this.http.get(this.apiUrl+ '/bots/' + bid + '/discord/guilds/');
    }    

    getMembers(bid: number, gid: number) {
        return this.http.get(this.apiUrl+ '/bots/' + bid + '/discord/guilds/' + gid + '/members');
    }    

    getEmojis(bid: number, gid: number) {
        return this.http.get(this.apiUrl+ '/bots/' + bid + '/discord/guilds/' + gid + '/emojis');
    }

    // getById(id: number) {
    //     return this.http.get<Guild>(`${this.guildUrl}/` + id);
    // }

    // add(guild: Guild) {
    //     return this.http.post(`${this.guildUrl}/add`, guild);
    // }

    // update(guild: Guild, id: number) {
    //     return this.http.put(`${this.guildUrl}/` + id, guild);
    // }

    // start(id: number) {
    //     return this.http.put(this.apiUrl + '/guilds/'+ id + `/start`, "");
    // }

    // stop(id: number) {
    //     return this.http.put(this.apiUrl + '/guilds/'+ id + `/stop`, "");
    // }

    // delete(id: number) {
    //     return this.http.delete(`${this.guildUrl}/` + id);
    // }
}
