import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Bot } from '../_models';

@Injectable()
export class BotService {
    constructor(private http: HttpClient) { }

    apiUrl = 'http://localhost:4000/api';
    botUrl = this.apiUrl + '/bots';

    getAll() {
        return this.http.get<Bot[]>(`${this.botUrl}`);
    }

    getById(id: number) {
        return this.http.get<Bot>(`${this.botUrl}/` + id);
    }

    add(bot: Bot) {
        return this.http.post(`${this.botUrl}/add`, bot);
    }

    update(bot: Bot, id: number) {
        return this.http.put(`${this.botUrl}/` + id, bot);
    }

    start(id: number) {
        return this.http.put(`${this.botUrl}/`+ id + `/start`, "");
    }

    stop(id: number) {
        return this.http.put(`${this.botUrl}/`+ id + `/stop`, "");
    }

    delete(id: number) {
        return this.http.delete(`${this.botUrl}/` + id);
    }
}
