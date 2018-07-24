import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Guild } from '../_models';

@Injectable()
export class GuildService {
    constructor(private http: HttpClient) { }

    apiUrl = 'http://localhost:4000/api';
    guildUrl = this.apiUrl + '/guilds';

    getAll() {
        return this.http.get<Guild[]>(`${this.guildUrl}`);
    }

    getById(id: number) {
        return this.http.get<Guild>(`${this.guildUrl}/` + id);
    }

    add(guild: Guild) {
        return this.http.post(`${this.guildUrl}/add`, guild);
    }

    update(guild: Guild, id: number) {
        return this.http.put(`${this.guildUrl}/` + id, guild);
    }

    start(id: number) {
        return this.http.put(this.apiUrl + '/guilds/'+ id + `/start`, "");
    }

    stop(id: number) {
        return this.http.put(this.apiUrl + '/guilds/'+ id + `/stop`, "");
    }

    delete(id: number) {
        return this.http.delete(`${this.guildUrl}/` + id);
    }
}
