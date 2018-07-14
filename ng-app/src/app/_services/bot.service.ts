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

    getById(id: string) {
        return this.http.get<Bot>(`${this.botUrl}/` + id);
    }

    add(bot: Bot) {
        return this.http.post(`${this.botUrl}/add`, bot);
    }

    update(bot: Bot, id: string) {
        return this.http.put(`${this.botUrl}/` + id, bot);
    }

    delete(id: string) {
        return this.http.delete(`${this.botUrl}/` + id);
    }
}
